import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface StrummingPatternProps {
  pattern: string[];
  currentBeat: number;
  isPlaying: boolean;
}

const StrummingPattern: React.FC<StrummingPatternProps> = ({ 
  pattern, 
  currentBeat, 
  isPlaying 
}) => {
  return (
    <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white/80 text-sm font-medium">Strumming Pattern</h3>
        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-gray-400'} ${isPlaying ? 'animate-pulse' : ''}`}></div>
      </div>
      
      <div className="flex justify-center gap-3">
        {pattern.map((stroke, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-300 ${
              index === currentBeat 
                ? 'scale-110 text-white' 
                : 'text-white/50'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              index === currentBeat 
                ? 'bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50' 
                : 'bg-white/10'
            }`}>
              {stroke === 'D' ? (
                <ArrowDown className="w-4 h-4" />
              ) : (
                <ArrowUp className="w-4 h-4" />
              )}
            </div>
            <span className="text-xs mt-1 font-medium">{stroke}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrummingPattern;