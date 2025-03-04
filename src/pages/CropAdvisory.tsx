import React, { useState } from 'react';
import { 
  Sprout, 
  Droplets, 
  Bug, 
  Thermometer, 
  Upload, 
  Camera, 
  AlertTriangle 
} from 'lucide-react';

const CropAdvisory: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedTab, setSelectedTab] = useState('health');

  // Sample crop health data
  const cropHealthData = {
    wheat: {
      status: 'Good',
      issues: [
        {
          name: 'Leaf Rust',
          risk: 'Medium',
          symptoms: 'Small, round, orange-brown pustules on leaves',
          recommendation: 'Apply fungicide if infection exceeds 5% of leaf area. Monitor closely due to recent humid conditions.'
        }
      ],
      nextActions: [
        'Monitor for rust development due to recent rainfall',
        'Prepare for nitrogen top dressing in 7 days',
        'Check irrigation channels for proper drainage'
      ]
    },
    rice: {
      status: 'Warning',
      issues: [
        {
          name: 'Bacterial Leaf Blight',
          risk: 'High',
          symptoms: 'Water-soaked lesions that turn yellow to white as they develop',
          recommendation: 'Apply copper-based bactericide. Ensure proper spacing between plants to improve air circulation.'
        },
        {
          name: 'Stem Borer',
          risk: 'Medium',
          symptoms: 'Dead hearts in vegetative stage, white heads in reproductive stage',
          recommendation: 'Apply recommended insecticide during early infestation. Release Trichogramma parasitoids.'
        }
      ],
      nextActions: [
        'Apply bactericide within 2 days',
        'Monitor water levels to prevent excessive flooding',
        'Prepare for second fertilizer application'
      ]
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Crop Advisory</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <button className="btn-outline flex items-center">
            <Upload size={16} className="mr-1" />
            Upload Image
          </button>
          <button className="btn-primary flex items-center">
            <Camera size={16} className="mr-1" />
            Scan Crop
          </button>
        </div>
      </div>

      {/* Crop Selection */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Crop</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <button 
            className={`p-3 rounded-lg flex flex-col items-center ${
              selectedCrop === 'wheat' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCrop('wheat')}
          >
            <img 
              src="https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Wheat" 
              className="w-12 h-12 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium">Wheat</span>
          </button>
          
          <button 
            className={`p-3 rounded-lg flex flex-col items-center ${
              selectedCrop === 'rice' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCrop('rice')}
          >
            <img 
              src="https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Rice" 
              className="w-12 h-12 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium">Rice</span>
          </button>
          
          <button 
            className={`p-3 rounded-lg flex flex-col items-center ${
              selectedCrop === 'corn' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCrop('corn')}
          >
            <img 
              src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Corn" 
              className="w-12 h-12 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium">Corn</span>
          </button>
          
          <button 
            className={`p-3 rounded-lg flex flex-col items-center ${
              selectedCrop === 'cotton' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCrop('cotton')}
          >
            <img 
              src="https://images.unsplash.com/photo-1594641146604-a488ee99c583?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Cotton" 
              className="w-12 h-12 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium">Cotton</span>
          </button>
          
          <button 
            className={`p-3 rounded-lg flex flex-col items-center ${
              selectedCrop === 'soybean' ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCrop('soybean')}
          >
            <img 
              src="https://images.unsplash.com/photo-1599401464312-a6bc2a2dd8b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Soybean" 
              className="w-12 h-12 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium">Soybean</span>
          </button>
          
          <button 
            className="p-3 rounded-lg flex flex-col items-center bg-gray-50 hover:bg-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
              <span className="text-xl text-gray-500">+</span>
            </div>
            <span className="text-sm font-medium">Add Crop</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setSelectedTab('health')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'health'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Crop Health
          </button>
          <button
            onClick={() => setSelectedTab('calendar')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'calendar'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Crop Calendar
          </button>
          <button
            onClick={() => setSelectedTab('nutrition')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'nutrition'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Nutrition Management
          </button>
          <button
            onClick={() => setSelectedTab('disease')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'disease'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Disease Library
          </button>
        </nav>
      </div>

      {/* Crop Health Content */}
      {selectedTab === 'health' && selectedCrop && cropHealthData[selectedCrop as keyof typeof cropHealthData] && (
        <div className="space-y-6">
          {/* Health Status */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Current Health Status</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                cropHealthData[selectedCrop as keyof typeof cropHealthData].status === 'Good' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {cropHealthData[selectedCrop as keyof typeof cropHealthData].status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sprout className="h-5 w-5 text-green-700 mr-2" />
                  <h3 className="font-medium">Growth Stage</h3>
                </div>
                <p className="text-gray-700">Vegetative - Tillering</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="mt-1 text-xs text-gray-500">35% of growth cycle complete</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 text-blue-700 mr-2" />
                  <h3 className="font-medium">Moisture Status</h3>
                </div>
                <p className="text-gray-700">Adequate</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="mt-1 text-xs text-gray-500">Next irrigation in 3 days</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Bug className="h-5 w-5 text-amber-700 mr-2" />
                  <h3 className="font-medium">Pest Pressure</h3>
                </div>
                <p className="text-gray-700">Low</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-amber-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="mt-1 text-xs text-gray-500">Monitor for aphids</p>
              </div>
            </div>
          </div>

          {/* Health Issues */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Detected Issues</h2>
            
            {cropHealthData[selectedCrop as keyof typeof cropHealthData].issues.length > 0 ? (
              <div className="space-y-4">
                {cropHealthData[selectedCrop as keyof typeof cropHealthData].issues.map((issue, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between bg-gray-50 px-4 py-3">
                      <div className="flex items-center">
                        <AlertTriangle className={`h-5 w-5 mr-2 ${
                          issue.risk === 'High' ? 'text-red-500' : 'text-amber-500'
                        }`} />
                        <h3 className="font-medium">{issue.name}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.risk === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {issue.risk} Risk
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-500">Symptoms:</p>
                        <p className="text-gray-700">{issue.symptoms}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Recommendation:</p>
                        <p className="text-gray-700">{issue.recommendation}</p>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="btn-primary text-sm py-1.5">View Treatment</button>
                        <button className="btn-outline text-sm py-1.5">Learn More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Sprout className="h-5 w-5 text-green-700 mr-2" />
                  <p className="text-green-800 font-medium">No significant issues detected</p>
                </div>
                <p className="text-gray-600 mt-1">Your crop appears healthy based on the latest assessment.</p>
              </div>
            )}
          </div>

          {/* Next Actions */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended Actions</h2>
            <div className="space-y-3">
              {cropHealthData[selectedCrop as keyof typeof cropHealthData].nextActions.map((action, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-700 font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Disease Detection */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Disease Detection</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="mb-4">
                <Camera className="h-10 w-10 text-gray-400 mx-auto" />
                <p className="text-gray-600 mt-2">Upload a photo of your crop to detect diseases and get instant analysis</p>
              </div>
              <div className="flex justify-center">
                <button className="btn-primary">Upload Photo</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropAdvisory;