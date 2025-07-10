import React from 'react';
import { Chord } from '../types';

interface ChordDiagramProps {
  chord: Chord;
  size?: 'small' | 'medium' | 'large';
  showName?: boolean;
}

const ChordDiagram: React.FC<ChordDiagramProps> = ({ 
  chord, 
  size = 'medium', 
  showName = true 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return { container: 'w-16 h-20', dot: 'w-2 h-2', text: 'text-xs' };
      case 'large':
        return { container: 'w-32 h-40', dot: 'w-4 h-4', text: 'text-lg' };
      default:
        return { container: 'w-24 h-32', dot: 'w-3 h-3', text: 'text-sm' };
    }
  };

  const classes = getSizeClasses();
  const strings = ['E', 'A', 'D', 'G', 'B', 'E'];
  const frets = chord.frets;

  return (
    <div className="flex flex-col items-center">
      {showName && (
        <h3 className={`font-semibold text-white mb-2 ${classes.text}`}>
          {chord.name}
        </h3>
      )}
      
      <div className={`relative bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-3 border border-amber-200 ${classes.container}`}>
        {/* Fret lines */}
        <div className="absolute inset-3">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full border-t border-gray-400"
              style={{ top: `${(i + 1) * 16.67}%` }}
            />
          ))}
        </div>
        
        {/* String lines */}
        <div className="absolute inset-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute h-full border-l border-gray-600"
              style={{ left: `${i * 16.67}%` }}
            />
          ))}
        </div>
        
        {/* Finger positions */}
        <div className="absolute inset-3">
          {frets.map((fret, stringIndex) => {
            if (fret === -1) {
              // Muted string - X above the nut
              return (
                <div
                  key={stringIndex}
                  className="absolute text-red-500 font-bold text-xs"
                  style={{
                    left: `${stringIndex * 16.67 - 2}%`,
                    top: '-20px'
                  }}
                >
                  ×
                </div>
              );
            } else if (fret === 0) {
              // Open string - O above the nut
              return (
                <div
                  key={stringIndex}
                  className="absolute text-green-600 font-bold text-xs"
                  style={{
                    left: `${stringIndex * 16.67 - 2}%`,
                    top: '-20px'
                  }}
                >
                  ○
                </div>
              );
            } else {
              // Fretted note
              const adjustedFret = fret - (chord.baseFret || 1) + 1;
              return (
                <div
                  key={stringIndex}
                  className={`absolute bg-gradient-to-br from-blue-500 to-purple-600 rounded-full ${classes.dot} border-2 border-white shadow-lg`}
                  style={{
                    left: `${stringIndex * 16.67 - 6}%`,
                    top: `${adjustedFret * 16.67 - 6}%`
                  }}
                />
              );
            }
          })}
        </div>
        
        {/* Fret numbers */}
        {chord.baseFret && chord.baseFret > 1 && (
          <div className="absolute -left-6 top-3 text-xs text-white/60 font-medium">
            {chord.baseFret}fr
          </div>
        )}
      </div>
      
      {/* Finger numbers */}
      <div className="flex justify-center gap-1 mt-2">
        {chord.fingers.map((finger, index) => (
          <div
            key={index}
            className={`${classes.dot} rounded-full bg-gradient-to-br from-orange-400 to-pink-400 text-white text-xs font-bold flex items-center justify-center shadow-lg`}
          >
            {finger}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordDiagram;