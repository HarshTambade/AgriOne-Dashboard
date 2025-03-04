import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Video, 
  FileText, 
  Calendar, 
  Users,
  Search,
  ChevronRight
} from 'lucide-react';

const FarmingAssistance: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample expert data
  const experts = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Crop Disease Specialist',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Priya Singh',
      specialty: 'Soil Scientist',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      available: true
    },
    {
      id: 3,
      name: 'Amit Patel',
      specialty: 'Agricultural Engineer',
      rating: 4.7,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      available: false
    }
  ];
  
  // Sample FAQ data
  const faqs = [
    {
      question: 'How do I identify and treat wheat rust?',
      answer: 'Wheat rust appears as orange-brown pustules on leaves. Early application of fungicides like propiconazole or tebuconazole is effective. Preventative measures include crop rotation and resistant varieties.'
    },
    {
      question: 'What is the optimal irrigation schedule for rice during summer?',
      answer: 'Rice requires consistent moisture. Maintain 2-5cm water depth during vegetative stage, and 5-10cm during reproductive stage. Drain field 10-15 days before harvest. Adjust based on soil type and local climate conditions.'
    },
    {
      question: 'How can I improve soil fertility naturally?',
      answer: 'Use cover crops like legumes to fix nitrogen. Apply compost and organic matter to improve soil structure. Practice crop rotation to prevent nutrient depletion. Consider green manuring and vermicomposting for sustainable fertility management.'
    }
  ];
  
  // Sample upcoming events
  const events = [
    {
      title: 'Modern Irrigation Techniques Workshop',
      date: 'Sep 15, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Agricultural Extension Center, Pune',
      type: 'Workshop'
    },
    {
      title: 'Organic Farming Certification Seminar',
      date: 'Sep 20, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual (Zoom)',
      type: 'Seminar'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Farming Assistance</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <button className="btn-primary">
            <MessageSquare size={18} className="mr-2 inline" />
            Ask AI Assistant
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="card">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Search for farming advice, experts, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-green-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-green-700" />
          </div>
          <p className="text-sm font-medium">Chat with Expert</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-blue-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <Video className="h-6 w-6 text-blue-700" />
          </div>
          <p className="text-sm font-medium">Video Consultation</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-amber-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <FileText className="h-6 w-6 text-amber-700" />
          </div>
          <p className="text-sm font-medium">Knowledge Base</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-purple-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <Calendar className="h-6 w-6 text-purple-700" />
          </div>
          <p className="text-sm font-medium">Training Events</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-red-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <Users className="h-6 w-6 text-red-700" />
          </div>
          <p className="text-sm font-medium">Farmer Community</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <div className="rounded-full bg-gray-100 p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
            <HelpCircle className="h-6 w-6 text-gray-700" />
          </div>
          <p className="text-sm font-medium">Support Center</p>
        </div>
      </div>

      {/* Connect with Experts */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Connect with Agricultural Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experts.map((expert) => (
            <div key={expert.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center p-4">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{expert.name}</h3>
                  <p className="text-sm text-gray-500">{expert.specialty}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({expert.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  expert.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {expert.available ? 'Available Now' : 'Available in 2 hours'}
                </span>
                <button className="text-green-700 hover:text-green-800 text-sm font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="btn-outline">View All Experts</button>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3">
                <h3 className="font-medium text-gray-800">{faq.question}</h3>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="btn-outline">View All FAQs</button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Training Events</h2>
          <button className="text-green-700 hover:text-green-800 text-sm font-medium flex items-center">
            View Calendar
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start border-l-4 border-green-500 pl-4">
              <div className="bg-green-100 text-green-800 p-2 rounded text-center mr-4 w-16">
                <span className="block text-sm font-medium">{event.date.split(',')[0]}</span>
                <span className="block text-xs">{event.date.split(' ')[0]}</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.time}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {event.type}
                  </span>
                  <button className="ml-2 text-green-700 hover:text-green-800 text-sm font-medium">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <div className="rounded-full bg-green-100 p-4 w-20 h-20 flex items-center justify-center mx-auto">
              <HelpCircle className="h-10 w-10 text-green-700" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-green-800 mb-2">Need immediate assistance?</h2>
            <p className="text-green-700 mb-4">
              Our AI farming assistant is available 24/7 to answer your questions and provide personalized recommendations.
            </p>
            <button className="btn-primary">
              Chat with AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingAssistance;