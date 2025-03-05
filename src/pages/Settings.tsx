import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Globe, 
  Lock, 
  Shield, 
  Smartphone, 
  Languages, 
  HelpCircle,
  Save
} from 'lucide-react';
import { useStore } from '../store';

const Settings: React.FC = () => {
  const user = useStore((state) => state.user);
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    priceAlerts: true,
    weatherAlerts: true,
    marketUpdates: true
  });

  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [location, setLocation] = useState(user?.location || '');

  const handleSaveSettings = () => {
    // Implement settings save logic
    console.log('Saving settings...');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button 
          onClick={handleSaveSettings}
          className="btn-primary flex items-center"
        >
          <Save size={18} className="mr-2" />
          Save Changes
        </button>
      </div>

      {/* Settings Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'language', label: 'Language & Region', icon: Globe },
            { id: 'security', label: 'Security', icon: Lock },
            { id: 'privacy', label: 'Privacy', icon: Shield },
            { id: 'help', label: 'Help & Support', icon: HelpCircle },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Icon size={18} className="mr-2" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Profile Settings */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="input-field mt-1"
                  value={user?.fullName}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="input-field mt-1"
                  value={user?.email}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="input-field mt-1"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="input-field mt-1"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Farm Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Farm Size</label>
                <input
                  type="text"
                  className="input-field mt-1"
                  placeholder="Enter farm size in acres"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Primary Crops</label>
                <input
                  type="text"
                  className="input-field mt-1"
                  placeholder="Enter primary crops"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Settings */}
      {activeTab === 'notifications' && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <h3 className="font-medium text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h3 className="font-medium text-gray-800">Push Notifications</h3>
                <p className="text-sm text-gray-500">Get instant updates on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h3 className="font-medium text-gray-800">SMS Notifications</h3>
                <p className="text-sm text-gray-500">Get updates via text message</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-medium text-gray-800 mb-3">Alert Types</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={notifications.priceAlerts}
                    onChange={(e) => setNotifications({ ...notifications, priceAlerts: e.target.checked })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Price Alerts
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={notifications.weatherAlerts}
                    onChange={(e) => setNotifications({ ...notifications, weatherAlerts: e.target.checked })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Weather Alerts
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={notifications.marketUpdates}
                    onChange={(e) => setNotifications({ ...notifications, marketUpdates: e.target.checked })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Market Updates
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Language & Region Settings */}
      {activeTab === 'language' && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Language & Regional Settings</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="input-field"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="gu">ગુજરાતી (Gujarati)</option>
                <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                <option value="bn">বাংলা (Bengali)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="input-field"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <select className="input-field">
                <option value="IST">India Standard Time (IST)</option>
                <option value="UTC">Coordinated Universal Time (UTC)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
              <select className="input-field">
                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                <option value="yyyy/mm/dd">YYYY/MM/DD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
              <select className="input-field">
                <option value="INR">Indian Rupee (₹)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input type="password" className="input-field mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" className="input-field mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input type="password" className="input-field mt-1" />
              </div>
              <button className="btn-primary">Change Password</button>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Add an extra layer of security to your account</p>
                <p className="text-sm text-gray-500 mt-1">
                  We'll ask for a verification code in addition to your password
                </p>
              </div>
              <button className="btn-outline">Enable 2FA</button>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Login History</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium">Mumbai, India</p>
                  <p className="text-sm text-gray-500">Chrome on Windows • 2 days ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Current
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium">Pune, India</p>
                  <p className="text-sm text-gray-500">Safari on iPhone • 5 days ago</p>
                </div>
                <button className="text-red-600 text-sm font-medium">Remove</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Settings */}
      {activeTab === 'privacy' && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Privacy Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <h3 className="font-medium text-gray-800">Profile Visibility</h3>
                <p className="text-sm text-gray-500">Control who can see your profile</p>
              </div>
              <select className="input-field w-auto">
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="contacts">Contacts Only</option>
              </select>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <h3 className="font-medium text-gray-800">Location Sharing</h3>
                <p className="text-sm text-gray-500">Share your location with other users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <h3 className="font-medium text-gray-800">Data Usage</h3>
                <p className="text-sm text-gray-500">Allow data collection for better recommendations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="mt-6">
              <button className="text-red-600 font-medium">Delete Account</button>
              <p className="text-sm text-gray-500 mt-1">
                Once you delete your account, it cannot be recovered
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Help & Support */}
      {activeTab === 'help' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Help Center</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <HelpCircle className="h-6 w-6 text-green-700 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">FAQs</h3>
                  <p className="text-sm text-gray-500">Find answers to common questions</p>
                </div>
                <button className="ml-auto btn-outline text-sm">View FAQs</button>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MessageSquare className="h-6 w-6 text-green-700 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Contact Support</h3>
                  <p className="text-sm text-gray-500">Get help from our support team</p>
                </div>
                <button className="ml-auto btn-outline text-sm">Contact Us</button>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Book className="h-6 w-6 text-green-700 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">User Guide</h3>
                  <p className="text-sm text-gray-500">Learn how to use AgriOne</p>
                </div>
                <button className="ml-auto btn-outline text-sm">Read Guide</button>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer
                      url={tutorial.url}
                      width="100%"
                      height="100%"
                      controls
                      light={tutorial.thumbnail}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800">{tutorial.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const tutorials = [
  {
    title: "Getting Started with AgriOne",
    description: "Learn the basics of using the AgriOne platform",
    url: "https://www.youtube.com/watch?v=example1",
    thumbnail: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Advanced Market Analysis",
    description: "Master the market analysis tools",
    url: "https://www.youtube.com/watch?v=example2",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Weather Monitoring Guide",
    description: "Understand weather patterns and predictions",
    url: "https://www.youtube.com/watch?v=example3",
    thumbnail: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Crop Disease Detection",
    description: "Learn to identify and treat crop diseases",
    url: "https://www.youtube.com/watch?v=example4",
    thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

export default Settings;