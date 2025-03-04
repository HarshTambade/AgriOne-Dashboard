import React from 'react';
import { 
  TrendingUp, 
  CloudRain, 
  AlertTriangle, 
  DollarSign, 
  BarChart2, 
  Calendar 
} from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  // Sample data for charts
  const priceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Wheat Price (₹/quintal)',
        data: [1800, 1850, 1900, 2000, 1950, 2100],
        borderColor: '#2E7D32',
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Rice Price (₹/quintal)',
        data: [2200, 2250, 2300, 2400, 2350, 2500],
        borderColor: '#FFA000',
        backgroundColor: 'rgba(255, 160, 0, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const yieldData = {
    labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton', 'Sugarcane'],
    datasets: [
      {
        label: 'Current Yield (quintal/acre)',
        data: [20, 25, 30, 15, 10, 40],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Predicted Yield (quintal/acre)',
        data: [22, 28, 32, 16, 12, 45],
        backgroundColor: '#81C784',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated: Today, 10:30 AM</span>
          <button className="btn-outline text-sm py-1">Refresh</button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Current Wheat Price</p>
            <p className="text-xl font-bold">₹2,100/quintal</p>
            <p className="text-sm text-green-600">↑ 5.2% from last month</p>
          </div>
        </div>

        <div className="card flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <CloudRain className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Weather Forecast</p>
            <p className="text-xl font-bold">Light Rain</p>
            <p className="text-sm text-gray-600">28°C, 75% humidity</p>
          </div>
        </div>

        <div className="card flex items-center">
          <div className="rounded-full bg-amber-100 p-3 mr-4">
            <AlertTriangle className="h-6 w-6 text-amber-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Crop Risk Alert</p>
            <p className="text-xl font-bold">Moderate</p>
            <p className="text-sm text-amber-600">Potential pest infestation</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Market Price Trends</h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Last 2 Years</option>
            </select>
          </div>
          <div className="h-64">
            <Line 
              data={priceData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: false,
                  },
                },
              }} 
            />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Yield Comparison</h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Current Season</option>
              <option>Last Season</option>
              <option>Year-on-Year</option>
            </select>
          </div>
          <div className="h-64">
            <Bar 
              data={yieldData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }} 
            />
          </div>
        </div>
      </div>

      {/* Recommendations & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Recommendations</h2>
          <div className="space-y-4">
            <div className="flex items-start p-3 bg-green-50 rounded-md">
              <BarChart2 className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-800">Market Opportunity</p>
                <p className="text-sm text-gray-600">Wheat prices are projected to rise by 8% in the next 2 weeks. Consider delaying your sale for better returns.</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-blue-50 rounded-md">
              <Calendar className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-800">Crop Planning</p>
                <p className="text-sm text-gray-600">Based on soil analysis and weather forecast, consider planting mustard in the north field for optimal yield this season.</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-amber-50 rounded-md">
              <DollarSign className="h-5 w-5 text-amber-700 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-amber-800">Financial Advisory</p>
                <p className="text-sm text-gray-600">You qualify for the PM-KISAN subsidy. Application window closes in 5 days. Click here to apply.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-3">
              <p className="font-medium">Farmer's Workshop</p>
              <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
              <p className="text-sm text-gray-600 mt-1">Modern irrigation techniques</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-3">
              <p className="font-medium">Market Day</p>
              <p className="text-sm text-gray-500">Sep 15, 8:00 AM</p>
              <p className="text-sm text-gray-600 mt-1">Regional Farmer's Market</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-3">
              <p className="font-medium">Subsidy Deadline</p>
              <p className="text-sm text-gray-500">Sep 20</p>
              <p className="text-sm text-gray-600 mt-1">Last date for fertilizer subsidy</p>
            </div>
          </div>
          <button className="w-full btn-outline mt-4 text-sm">View All Events</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;