import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext
}) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          canGoPrevious
            ? 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:scale-105'
            : 'bg-white/10 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 ${canGoPrevious ? 'text-white' : 'text-white/40'}`} />
      </button>
      
      <div className="flex flex-col items-center">
        <span className="text-white/60 text-sm font-medium">Manual Controls</span>
        <div className="flex gap-2 mt-1">
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          canGoNext
            ? 'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40 hover:scale-105'
            : 'bg-white/10 cursor-not-allowed'
        }`}
      >
        <ChevronRight className={`w-6 h-6 ${canGoNext ? 'text-white' : 'text-white/40'}`} />
      </button>
    </div>
  );
};

export default NavigationControls;