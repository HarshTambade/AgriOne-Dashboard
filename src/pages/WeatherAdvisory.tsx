import React from 'react';
import { 
  CloudRain, 
  Droplets, 
  Wind, 
  Thermometer, 
  Calendar, 
  AlertTriangle,
  MapPin
} from 'lucide-react';

const WeatherAdvisory: React.FC = () => {
  // Sample weather forecast data
  const forecast = [
    { 
      day: 'Today', 
      date: 'Sep 10', 
      condition: 'Light Rain', 
      icon: <CloudRain size={24} className="text-blue-500" />,
      temp: { high: 28, low: 22 },
      precipitation: 60,
      humidity: 75,
      wind: 12
    },
    { 
      day: 'Tomorrow', 
      date: 'Sep 11', 
      condition: 'Cloudy', 
      icon: <CloudRain size={24} className="text-gray-500" />,
      temp: { high: 29, low: 23 },
      precipitation: 30,
      humidity: 70,
      wind: 10
    },
    { 
      day: 'Wednesday', 
      date: 'Sep 12', 
      condition: 'Sunny', 
      icon: <Thermometer size={24} className="text-yellow-500" />,
      temp: { high: 32, low: 24 },
      precipitation: 10,
      humidity: 65,
      wind: 8
    },
    { 
      day: 'Thursday', 
      date: 'Sep 13', 
      condition: 'Partly Cloudy', 
      icon: <CloudRain size={24} className="text-gray-400" />,
      temp: { high: 30, low: 23 },
      precipitation: 20,
      humidity: 68,
      wind: 9
    },
    { 
      day: 'Friday', 
      date: 'Sep 14', 
      condition: 'Sunny', 
      icon: <Thermometer size={24} className="text-yellow-500" />,
      temp: { high: 31, low: 24 },
      precipitation: 5,
      humidity: 60,
      wind: 7
    },
    { 
      day: 'Saturday', 
      date: 'Sep 15', 
      condition: 'Sunny', 
      icon: <Thermometer size={24} className="text-yellow-500" />,
      temp: { high: 33, low: 25 },
      precipitation: 0,
      humidity: 55,
      wind: 6
    },
    { 
      day: 'Sunday', 
      date: 'Sep 16', 
      condition: 'Partly Cloudy', 
      icon: <CloudRain size={24} className="text-gray-400" />,
      temp: { high: 32, low: 24 },
      precipitation: 15,
      humidity: 62,
      wind: 8
    }
  ];

  // Sample crop advisories based on weather
  const cropAdvisories = [
    {
      crop: 'Wheat',
      advice: 'Delay irrigation due to expected rainfall. Monitor for rust development in humid conditions.',
      severity: 'medium'
    },
    {
      crop: 'Rice',
      advice: 'Ensure proper drainage to prevent waterlogging. Apply fungicide preventatively due to high humidity.',
      severity: 'high'
    },
    {
      crop: 'Cotton',
      advice: 'Postpone pesticide application until Thursday when rain probability is lower.',
      severity: 'medium'
    },
    {
      crop: 'Vegetables',
      advice: 'Use temporary covers to protect from heavy rainfall. Check for pest infestation after rain.',
      severity: 'high'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Weather Advisory</h1>
        <div className="flex items-center mt-2 md:mt-0">
          <MapPin size={18} className="text-gray-500 mr-1" />
          <span className="text-gray-600 mr-2">Pune, Maharashtra</span>
          <button className="text-green-700 hover:text-green-800 text-sm font-medium">Change Location</button>
        </div>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <CloudRain size={48} className="mr-2" />
              <div>
                <h2 className="text-3xl font-bold">28°C</h2>
                <p className="text-blue-100">Light Rain</p>
              </div>
            </div>
            <p className="mt-2 text-blue-100">Feels like 30°C</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <Thermometer size={20} className="mr-2 text-blue-100" />
              <span>High: 28°C / Low: 22°C</span>
            </div>
            <div className="flex items-center">
              <Droplets size={20} className="mr-2 text-blue-100" />
              <span>Humidity: 75%</span>
            </div>
            <div className="flex items-center">
              <Wind size={20} className="mr-2 text-blue-100" />
              <span>Wind: 12 km/h</span>
            </div>
            <div className="flex items-center">
              <CloudRain size={20} className="mr-2 text-blue-100" />
              <span>Precipitation: 60%</span>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <AlertTriangle size={20} className="mr-2" />
              <h3 className="font-semibold">Weather Alert</h3>
            </div>
            <p className="text-sm">Heavy rainfall expected in the next 24 hours. Ensure proper drainage in fields and delay any planned spraying operations.</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forecast.map((day, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-lg p-3 text-center ${index === 0 ? 'border-2 border-blue-500' : ''}`}
            >
              <p className="font-medium">{day.day}</p>
              <p className="text-xs text-gray-500">{day.date}</p>
              <div className="my-2 flex justify-center">
                {day.icon}
              </div>
              <p className="text-sm">{day.condition}</p>
              <p className="mt-1">
                <span className="font-medium">{day.temp.high}°</span>
                <span className="text-gray-500 text-sm"> / {day.temp.low}°</span>
              </p>
              <div className="mt-2 text-xs text-gray-500">
                <p>Rain: {day.precipitation}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crop-specific Advisories */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Crop-specific Weather Advisories</h2>
        <div className="space-y-4">
          {cropAdvisories.map((advisory, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg ${
                advisory.severity === 'high' 
                  ? 'bg-red-50 border-l-4 border-red-500' 
                  : advisory.severity === 'medium'
                  ? 'bg-amber-50 border-l-4 border-amber-500'
                  : 'bg-blue-50 border-l-4 border-blue-500'
              }`}
            >
              <h3 className="font-semibold text-gray-800">{advisory.crop}</h3>
              <p className="text-gray-600 mt-1">{advisory.advice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Outlook */}
      <div className="card">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-green-700 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Seasonal Weather Outlook</h2>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium text-gray-800 mb-2">September - November 2025</h3>
          <p className="text-gray-600">
            The monsoon is expected to withdraw by early October, with post-monsoon showers continuing until mid-November. 
            Temperatures will gradually decrease from late October. Overall rainfall is predicted to be 5% above normal for this period.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Rainfall Prediction</h3>
            <p className="text-gray-600 text-sm">5% above normal</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">65% of annual rainfall received</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-medium text-amber-800 mb-2">Temperature Trend</h3>
            <p className="text-gray-600 text-sm">1-2°C above normal</p>
            <div className="mt-2 flex items-center space-x-1">
              <Thermometer size={16} className="text-amber-500" />
              <div className="h-2 flex-grow bg-gray-200 rounded-full">
                <div className="h-2 bg-amber-500 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Gradual cooling expected</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Crop Planning</h3>
            <p className="text-gray-600 text-sm">Favorable for rabi crop sowing</p>
            <p className="mt-2 text-xs text-gray-600">
              Ideal sowing window: Oct 15 - Nov 10
            </p>
            <button className="mt-2 text-green-700 text-sm font-medium">View detailed calendar</button>
          </div>
        </div>
      </div>

      {/* AI-Powered Recommendations */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">AI-Powered Weather Recommendations</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="rounded-full bg-green-100 p-2 mr-3 flex-shrink-0">
              <Droplets className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Irrigation Planning</h3>
              <p className="text-gray-600 text-sm mt-1">
                Skip irrigation for the next 2 days due to expected rainfall. Resume light irrigation from Thursday if no significant rainfall occurs.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-amber-100 p-2 mr-3 flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Disease Prevention</h3>
              <p className="text-gray-600 text-sm mt-1">
                High humidity and moderate temperatures increase risk of fungal diseases. Consider preventative fungicide application for susceptible crops after rainfall subsides.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-blue-100 p-2 mr-3 flex-shrink-0">
              <Calendar className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Harvesting Advisory</h3>
              <p className="text-gray-600 text-sm mt-1">
                Delay harvesting of mature crops until Friday when dry conditions are expected. Ensure proper storage facilities are prepared to prevent moisture damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAdvisory;