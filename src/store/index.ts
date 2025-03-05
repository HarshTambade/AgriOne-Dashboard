import { create } from 'zustand';
import { User, Product, WeatherForecast, CropData, FarmAnalytics } from '../types';

interface AppState {
  user: User | null;
  products: Product[];
  weather: WeatherForecast | null;
  crops: CropData[];
  analytics: FarmAnalytics | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setProducts: (products: Product[]) => void;
  setWeather: (weather: WeatherForecast | null) => void;
  setCrops: (crops: CropData[]) => void;
  setAnalytics: (analytics: FarmAnalytics | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  products: [],
  weather: null,
  crops: [],
  analytics: null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setProducts: (products) => set({ products }),
  setWeather: (weather) => set({ weather }),
  setCrops: (crops) => set({ crops }),
  setAnalytics: (analytics) => set({ analytics }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));