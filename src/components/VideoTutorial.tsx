import React from 'react';
import ReactPlayer from 'react-player';
import { Play, Book, CheckCircle } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface VideoTutorialProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
}

const VideoTutorial: React.FC<VideoTutorialProps> = ({ tutorials, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>('all');

  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const categories = ['all', ...new Set(tutorials.map(t => t.category))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Video Tutorials</h2>
        <div className="mt-3 sm:mt-0 flex space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="input-field"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  url={tutorial.url}
                  light={tutorial.thumbnail}
                  width="100%"
                  height="100%"
                  playIcon={
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4">
                        <Play className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  }
                />
              </div>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {tutorial.duration}
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{tutorial.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tutorial.description}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tutorial.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.category}</span>
                </div>
                <button
                  onClick={() => onSelect(tutorial)}
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
                >
                  Watch Now
                  <Play size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No tutorials found</h3>
          <p className="text-gray-500">Try adjusting your filters</p>
        </div>
      )}

      <div className="bg-green-50 rounded-lg p-6 mt-8">
        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-green-800">Learning Track Progress</h3>
            <p className="text-green-600 mt-1">Complete tutorials to earn certificates and track your progress</p>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="h-2 bg-green-200 rounded-full">
                    <div className="h-2 bg-green-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium text-green-600">60% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;