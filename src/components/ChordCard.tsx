import React from 'react';
import ChordDiagram from './ChordDiagram';
import { Chord } from '../types';

interface ChordCardProps {
  chord: Chord;
  isActive: boolean;
  position: 'left' | 'center' | 'right';
}

const ChordCard: React.FC<ChordCardProps> = ({ chord, isActive, position }) => {
  const getCardClasses = () => {
    const baseClasses = "transition-all duration-500 rounded-3xl p-6 border backdrop-blur-sm";
    
    switch (position) {
      case 'center':
        return `${baseClasses} bg-white/10 border-white/20 shadow-2xl shadow-purple-500/20 scale-100 opacity-100 z-10`;
      case 'left':
        return `${baseClasses} bg-white/5 border-white/10 scale-90 opacity-60 -translate-x-4 z-0`;
      case 'right':
        return `${baseClasses} bg-white/5 border-white/10 scale-90 opacity-60 translate-x-4 z-0`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className={getCardClasses()}>
      <div className="text-center">
        <ChordDiagram 
          chord={chord} 
          size={position === 'center' ? 'large' : 'medium'}
          showName={true}
        />
      </div>
    </div>
  );
};

export default ChordCard;