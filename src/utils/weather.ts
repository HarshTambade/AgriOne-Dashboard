import { WeatherForecast, WeatherAlert } from '../types';

export const analyzeWeatherRisks = (forecast: WeatherForecast) => {
  const risks = [];

  // Temperature risks
  const highTempThreshold = 35; // °C
  const lowTempThreshold = 5; // °C

  forecast.daily.forEach(day => {
    if (day.temperatureMax > highTempThreshold) {
      risks.push({
        type: 'high_temperature',
        severity: 'high',
        date: new Date(day.timestamp * 1000),
        message: `High temperature alert: ${day.temperatureMax}°C`,
      });
    }

    if (day.temperatureMin < lowTempThreshold) {
      risks.push({
        type: 'low_temperature',
        severity: 'high',
        date: new Date(day.timestamp * 1000),
        message: `Low temperature alert: ${day.temperatureMin}°C`,
      });
    }
  });

  // Precipitation risks
  const heavyRainThreshold = 50; // mm
  forecast.daily.forEach(day => {
    if (day.precipitation > heavyRainThreshold) {
      risks.push({
        type: 'heavy_rain',
        severity: 'high',
        date: new Date(day.timestamp * 1000),
        message: `Heavy rainfall expected: ${day.precipitation}mm`,
      });
    }
  });

  return risks;
};

export const generateWeatherAdvisory = (forecast: WeatherForecast) => {
  const risks = analyzeWeatherRisks(forecast);
  const advisory = {
    summary: '',
    recommendations: [] as string[],
    risks,
  };

  // Generate summary
  const nextThreeDays = forecast.daily.slice(0, 3);
  const conditions = nextThreeDays.map(day => day.condition.toLowerCase());
  
  if (conditions.some(c => c.includes('rain'))) {
    advisory.recommendations.push('Plan indoor activities for crop storage and maintenance');
    advisory.recommendations.push('Ensure proper drainage in fields');
  }

  if (conditions.some(c => c.includes('sun') || c.includes('clear'))) {
    advisory.recommendations.push('Good conditions for harvesting and drying crops');
    advisory.recommendations.push('Consider irrigation if needed');
  }

  // Temperature-based recommendations
  const maxTemps = nextThreeDays.map(day => day.temperatureMax);
  const avgMaxTemp = maxTemps.reduce((a, b) => a + b, 0) / maxTemps.length;

  if (avgMaxTemp > 30) {
    advisory.recommendations.push('Provide shade for sensitive crops');
    advisory.recommendations.push('Increase irrigation frequency');
  }

  return advisory;
};

export const formatWeatherData = (forecast: WeatherForecast) => {
  return {
    current: {
      temperature: Math.round(forecast.current.temperature),
      condition: forecast.current.condition,
      humidity: forecast.current.humidity,
      windSpeed: Math.round(forecast.current.windSpeed),
      feelsLike: Math.round(forecast.current.temperature + (forecast.current.humidity > 70 ? 2 : 0)),
    },
    hourly: forecast.hourly.map(hour => ({
      time: new Date(hour.timestamp * 1000).getHours(),
      temperature: Math.round(hour.temperature),
      condition: hour.condition,
    })),
    daily: forecast.daily.map(day => ({
      date: new Date(day.timestamp * 1000),
      high: Math.round(day.temperatureMax),
      low: Math.round(day.temperatureMin),
      condition: day.condition,
      precipitation: day.precipitation,
    })),
    alerts: forecast.alerts || [],
  };
};

export const getWeatherIcon = (condition: string) => {
  // Map weather conditions to Lucide icons
  const iconMap: Record<string, string> = {
    'clear': 'sun',
    'rain': 'cloud-rain',
    'cloudy': 'cloud',
    'partly-cloudy': 'cloud-sun',
    'thunderstorm': 'cloud-lightning',
    'snow': 'cloud-snow',
    'mist': 'cloud-drizzle',
  };

  return iconMap[condition.toLowerCase()] || 'cloud';
};