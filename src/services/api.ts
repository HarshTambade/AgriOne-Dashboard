import { createClient } from '@supabase/supabase-js';
import { User, Product, WeatherForecast, CropData, FarmAnalytics } from '../types';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

// Auth Services
export const authService = {
  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  register: async (email: string, password: string, userData: Partial<User>) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    if (error) throw error;
    return data;
  },

  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
};

// Market Services
export const marketService = {
  getProducts: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
    return data;
  },

  createProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  updateProduct: async (id: string, updates: Partial<Product>): Promise<Product> => {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// Weather Services
export const weatherService = {
  getForecast: async (latitude: number, longitude: number): Promise<WeatherForecast> => {
    const { data, error } = await supabase
      .rpc('get_weather_forecast', { lat: latitude, lng: longitude });
    if (error) throw error;
    return data;
  },
};

// Crop Services
export const cropService = {
  getCrops: async (userId: string): Promise<CropData[]> => {
    const { data, error } = await supabase
      .from('crops')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return data;
  },

  updateCrop: async (id: string, updates: Partial<CropData>): Promise<CropData> => {
    const { data, error } = await supabase
      .from('crops')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// Analytics Services
export const analyticsService = {
  getFarmAnalytics: async (userId: string): Promise<FarmAnalytics> => {
    const { data, error } = await supabase
      .rpc('get_farm_analytics', { user_id: userId });
    if (error) throw error;
    return data;
  },
};

// Real-time Subscriptions
export const subscribeToProducts = (callback: (payload: any) => void) => {
  return supabase
    .channel('products')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, callback)
    .subscribe();
};

export const subscribeToWeatherAlerts = (userId: string, callback: (payload: any) => void) => {
  return supabase
    .channel(`weather_alerts:${userId}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'weather_alerts' }, callback)
    .subscribe();
};