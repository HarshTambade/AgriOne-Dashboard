import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, X, RefreshCw, Check } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import { FilesetResolver, ImageClassifier } from '@mediapipe/tasks-vision';

interface CropScannerProps {
  onClose: () => void;
  onScanComplete: (result: ScanResult) => void;
}

interface ScanResult {
  disease: string;
  confidence: number;
  recommendations: string[];
}

const CropScanner: React.FC<CropScannerProps> = ({ onClose, onScanComplete }) => {
  const webcamRef = useRef<Webcam>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [classifier, setClassifier] = useState<ImageClassifier | null>(null);

  // Initialize the image classifier
  React.useEffect(() => {
    const initializeClassifier = async () => {
      const filesetResolver = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      const imageClassifier = await ImageClassifier.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/1/efficientnet_lite0.tflite",
          delegate: "GPU"
        },
        maxResults: 5,
        runningMode: "IMAGE"
      });
      setClassifier(imageClassifier);
    };
    initializeClassifier();
  }, []);

  const captureImage = useCallback(async () => {
    if (!webcamRef.current || !classifier) return;

    setIsScanning(true);
    const imageSrc = webcamRef.current.getScreenshot();
    
    if (imageSrc) {
      // Create an image element from the screenshot
      const img = new Image();
      img.src = imageSrc;
      await img.decode(); // Wait for the image to load

      // Perform classification
      const result = await classifier.classify(img);
      
      // Process results and provide recommendations
      // This is a simplified example - in a real app, you'd have more sophisticated disease detection
      const scanResult: ScanResult = {
        disease: result[0]?.categories[0]?.categoryName || 'Unknown',
        confidence: result[0]?.categories[0]?.score || 0,
        recommendations: [
          'Apply appropriate fungicide if confirmed',
          'Monitor affected areas closely',
          'Consider consulting a local agricultural expert',
          'Document the spread pattern'
        ]
      };

      onScanComplete(scanResult);
    }

    setIsScanning(false);
  }, [classifier, onScanComplete]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Camera className="h-5 w-5 mr-2 text-green-600" />
            Crop Disease Scanner
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-full object-cover"
            />
            {isScanning && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-white animate-spin" />
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={captureImage}
              disabled={isScanning}
              className="btn-primary flex items-center"
            >
              <Camera size={18} className="mr-2" />
              {isScanning ? 'Scanning...' : 'Scan Now'}
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <p>Position the affected crop area clearly in the camera view for best results.</p>
            <p className="mt-1">Our AI model will analyze the image and provide disease detection results with recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropScanner;