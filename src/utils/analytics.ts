import { FarmAnalytics, YieldData, ExpenseData, RevenueData } from '../types';

export const calculateYieldTrends = (yields: YieldData[]) => {
  // Group yields by crop and calculate trends
  const cropYields = yields.reduce((acc, curr) => {
    if (!acc[curr.cropId]) {
      acc[curr.cropId] = [];
    }
    acc[curr.cropId].push(curr);
    return acc;
  }, {} as Record<string, YieldData[]>);

  // Calculate trend percentages
  return Object.entries(cropYields).map(([cropId, yields]) => {
    const sorted = yields.sort((a, b) => a.year - b.year);
    const lastTwo = sorted.slice(-2);
    if (lastTwo.length < 2) return { cropId, trend: 0 };

    const trend = ((lastTwo[1].quantity - lastTwo[0].quantity) / lastTwo[0].quantity) * 100;
    return { cropId, trend };
  });
};

export const calculateProfitMargins = (
  revenue: RevenueData[],
  expenses: ExpenseData[]
) => {
  const totalRevenue = revenue.reduce((sum, curr) => sum + curr.amount, 0);
  const totalExpenses = expenses.reduce((sum, curr) => sum + curr.amount, 0);
  const profitMargin = ((totalRevenue - totalExpenses) / totalRevenue) * 100;
  return profitMargin;
};

export const predictFutureYields = (
  historicalYields: YieldData[],
  weatherData: any // Add proper weather data type
) => {
  // Implement ML-based yield prediction
  // This is a placeholder for actual ML implementation
  return historicalYields.reduce((acc, curr) => acc + curr.quantity, 0) / historicalYields.length;
};

export const generateAnalyticsReport = (analytics: FarmAnalytics) => {
  const yieldTrends = calculateYieldTrends(analytics.yields);
  const profitMargins = calculateProfitMargins(analytics.revenue, analytics.expenses);
  
  return {
    summary: {
      totalRevenue: analytics.revenue.reduce((sum, curr) => sum + curr.amount, 0),
      totalExpenses: analytics.expenses.reduce((sum, curr) => sum + curr.amount, 0),
      profitMargin: profitMargins,
      yieldTrends,
    },
    recommendations: generateRecommendations(analytics),
    risks: assessRisks(analytics),
  };
};

const generateRecommendations = (analytics: FarmAnalytics) => {
  // Implement recommendation logic based on analytics
  const recommendations = [];
  
  // Example recommendation logic
  const profitMargin = calculateProfitMargins(analytics.revenue, analytics.expenses);
  if (profitMargin < 20) {
    recommendations.push({
      type: 'cost_reduction',
      message: 'Consider optimizing input costs to improve profit margins',
      priority: 'high',
    });
  }

  return recommendations;
};

const assessRisks = (analytics: FarmAnalytics) => {
  // Implement risk assessment logic
  const risks = [];
  
  // Example risk assessment
  const yieldTrends = calculateYieldTrends(analytics.yields);
  const decliningYields = yieldTrends.filter(trend => trend.trend < 0);
  
  if (decliningYields.length > 0) {
    risks.push({
      type: 'yield_decline',
      message: 'Declining yields detected in some crops',
      severity: 'medium',
      affectedCrops: decliningYields.map(trend => trend.cropId),
    });
  }

  return risks;
};