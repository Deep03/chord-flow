import React from 'react';
import ChordCard from './ChordCard';

interface Chord {
  name: string;
  diagram: string;
  fingers: string[];
}

interface ChordCarouselProps {
  chords: Chord[];
  currentIndex: number;
}

const ChordCarousel: React.FC<ChordCarouselProps> = ({ chords, currentIndex }) => {
  const getVisibleChords = () => {
    const visible = [];
    
    // Previous chord
    if (currentIndex > 0) {
      visible.push({
        chord: chords[currentIndex - 1],
        position: 'left' as const,
        key: `${currentIndex - 1}-left`
      });
    }
    
    // Current chord
    visible.push({
      chord: chords[currentIndex],
      position: 'center' as const,
      key: `${currentIndex}-center`
    });
    
    // Next chord
    if (currentIndex < chords.length - 1) {
      visible.push({
        chord: chords[currentIndex + 1],
        position: 'right' as const,
        key: `${currentIndex + 1}-right`
      });
    }
    
    return visible;
  };

  return (
    <div className="relative h-80 flex items-center justify-center">
      <div className="flex items-center justify-center space-x-4 w-full max-w-4xl">
        {getVisibleChords().map(({ chord, position, key }) => (
          <div key={key} className="flex-shrink-0">
            <ChordCard 
              chord={chord} 
              isActive={position === 'center'} 
              position={position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordCarousel;