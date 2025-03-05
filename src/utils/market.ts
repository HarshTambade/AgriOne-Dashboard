import { Product, MarketTrend } from '../types';

export const analyzePriceTrends = (products: Product[], historicalData: MarketTrend[]) => {
  return products.map(product => {
    const trend = historicalData.find(t => t.productId === product.id);
    if (!trend) return null;

    const pricePoints = trend.priceHistory.map(p => p.price);
    const avgPrice = pricePoints.reduce((a, b) => a + b, 0) / pricePoints.length;
    const currentPrice = product.price;
    const priceDiff = ((currentPrice - avgPrice) / avgPrice) * 100;

    return {
      productId: product.id,
      name: product.name,
      currentPrice,
      averagePrice: avgPrice,
      priceDifference: priceDiff,
      trend: priceDiff > 0 ? 'up' : 'down',
      prediction: trend.prediction,
    };
  }).filter(Boolean);
};

export const calculateMarketDemand = (products: Product[]) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        totalQuantity: 0,
        averagePrice: 0,
        products: [],
      };
    }

    acc[product.category].totalQuantity += product.quantity;
    acc[product.category].products.push(product);
    acc[product.category].averagePrice = 
      acc[product.category].products.reduce((sum, p) => sum + p.price, 0) / 
      acc[product.category].products.length;

    return acc;
  }, {} as Record<string, { totalQuantity: number; averagePrice: number; products: Product[] }>);
};

export const suggestOptimalPrice = (
  product: Product,
  marketTrends: MarketTrend[],
  localDemand: number
) => {
  const trend = marketTrends.find(t => t.productId === product.id);
  if (!trend) return product.price;

  const recentPrices = trend.priceHistory.slice(-30); // Last 30 days
  const avgPrice = recentPrices.reduce((sum, p) => sum + p.price, 0) / recentPrices.length;
  
  // Adjust price based on demand
  const demandFactor = localDemand > 0 ? 1 + (localDemand / 100) : 1;
  
  // Consider predicted price trends
  const predictedChange = (trend.prediction.nextWeek - avgPrice) / avgPrice;
  
  // Calculate suggested price
  const suggestedPrice = avgPrice * demandFactor * (1 + predictedChange);
  
  return Math.round(suggestedPrice * 100) / 100; // Round to 2 decimal places
};

export const generateMarketReport = (
  products: Product[],
  trends: MarketTrend[]
) => {
  const analysis = analyzePriceTrends(products, trends);
  const demand = calculateMarketDemand(products);

  return {
    summary: {
      totalProducts: products.length,
      categories: Object.keys(demand).length,
      averagePrice: products.reduce((sum, p) => sum + p.price, 0) / products.length,
    },
    trends: analysis,
    demand,
    recommendations: generateMarketRecommendations(analysis, demand),
  };
};

const generateMarketRecommendations = (
  analysis: any[],
  demand: Record<string, { totalQuantity: number; averagePrice: number; products: Product[] }>
) => {
  const recommendations = [];

  // Price-based recommendations
  const risingPrices = analysis.filter(a => a.trend === 'up');
  if (risingPrices.length > 0) {
    recommendations.push({
      type: 'price_opportunity',
      message: `Consider selling ${risingPrices.map(p => p.name).join(', ')} as prices are trending upward`,
      priority: 'high',
    });
  }

  // Demand-based recommendations
  Object.entries(demand).forEach(([category, data]) => {
    if (data.totalQuantity < 1000) { // Example threshold
      recommendations.push({
        type: 'supply_shortage',
        message: `Low supply detected in ${category} category. Consider increasing production.`,
        priority: 'medium',
      });
    }
  });

  return recommendations;
};