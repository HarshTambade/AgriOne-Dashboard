import React from 'react';
import { AlertTriangle, X, Check, ArrowRight } from 'lucide-react';

interface DiseaseDetectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: {
    disease: string;
    confidence: number;
    recommendations: string[];
  };
}

const DiseaseDetectionModal: React.FC<DiseaseDetectionModalProps> = ({
  isOpen,
  onClose,
  result
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
            Disease Detection Results
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-800">Detected Disease</h3>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                result.confidence > 0.7 ? 'bg-red-100 text-red-800' :
                result.confidence > 0.4 ? 'bg-amber-100 text-amber-800' :
                'bg-green-100 text-green-800'
              }`}>
                {Math.round(result.confidence * 100)}% Confidence
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-900 mt-2">{result.disease}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-800">Recommended Actions</h3>
            {result.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="ml-3 text-gray-600">{recommendation}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={onClose}
              className="btn-outline"
            >
              Close
            </button>
            <button className="btn-primary flex items-center">
              View Detailed Report
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionModal;