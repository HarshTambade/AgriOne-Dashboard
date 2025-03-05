// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: 'farmer' | 'vendor' | 'expert' | 'admin';
  location: string;
  createdAt: Date;
}

// Market Types
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  location: string;
  seller: string;
  rating: number;
  trend: 'up' | 'down';
  image: string;
}

export interface MarketTrend {
  productId: string;
  priceHistory: PricePoint[];
  prediction: PricePrediction;
}

interface PricePoint {
  date: Date;
  price: number;
}

interface PricePrediction {
  nextWeek: number;
  nextMonth: number;
  confidence: number;
}

// Weather Types
export interface WeatherForecast {
  current: WeatherData;
  hourly: WeatherData[];
  daily: DailyWeatherData[];
  alerts?: WeatherAlert[];
}

interface WeatherData {
  timestamp: number;
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  condition: string;
}

interface DailyWeatherData extends WeatherData {
  temperatureMin: number;
  temperatureMax: number;
  sunrise: number;
  sunset: number;
}

interface WeatherAlert {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  startTime: number;
  endTime: number;
}

// Crop Types
export interface CropData {
  id: string;
  name: string;
  stage: string;
  health: 'good' | 'warning' | 'critical';
  issues: CropIssue[];
  nextActions: string[];
}

interface CropIssue {
  name: string;
  risk: 'low' | 'medium' | 'high';
  symptoms: string;
  recommendation: string;
}

// Financial Types
export interface LoanApplication {
  id: string;
  userId: string;
  amount: number;
  term: number;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface Subsidy {
  id: string;
  name: string;
  description: string;
  amount: number;
  deadline: Date;
  eligibility: string[];
  status: 'open' | 'closed';
}

// Analytics Types
export interface FarmAnalytics {
  yields: YieldData[];
  expenses: ExpenseData[];
  revenue: RevenueData[];
  predictions: PredictionData;
}

interface YieldData {
  cropId: string;
  quantity: number;
  season: string;
  year: number;
}

interface ExpenseData {
  category: string;
  amount: number;
  date: Date;
}

interface RevenueData {
  source: string;
  amount: number;
  date: Date;
}

interface PredictionData {
  yieldPrediction: number;
  pricePrediction: number;
  profitPrediction: number;
  confidence: number;
}

// Chat & Support Types
export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'document';
}

export interface SupportTicket {
  id: string;
  userId: string;
  category: string;
  subject: string;
  status: 'open' | 'inProgress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}