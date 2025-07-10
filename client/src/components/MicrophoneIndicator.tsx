import React from 'react';
import { Mic, MicOff } from 'lucide-react';

interface MicrophoneIndicatorProps {
  isListening: boolean;
  isEnabled: boolean;
  onToggle: () => void;
}

const MicrophoneIndicator: React.FC<MicrophoneIndicatorProps> = ({
  isListening,
  isEnabled,
  onToggle
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border ${
          isEnabled
            ? isListening
              ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-green-300/30 shadow-lg shadow-green-500/40 animate-pulse'
              : 'bg-gradient-to-br from-blue-500 to-purple-600 border-blue-300/30 shadow-lg shadow-blue-500/30 hover:scale-105'
            : 'bg-white/10 border-white/20 hover:bg-white/20'
        }`}
      >
        {isEnabled ? (
          <Mic className="w-6 h-6 text-white" />
        ) : (
          <MicOff className="w-6 h-6 text-white/60" />
        )}
      </button>
      
      <div className="absolute -top-12 right-0 min-w-max">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white border border-white/20">
          {isListening ? 'Listening...' : isEnabled ? 'Tap to listen' : 'Mic disabled'}
        </div>
      </div>
    </div>
  );
};

export default MicrophoneIndicator;