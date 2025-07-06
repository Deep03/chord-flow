import React from 'react';
import { Music, Guitar } from 'lucide-react';
import AddButton from './AddButton';

interface EmptyStateProps {
  type: 'progression' | 'strumming' | 'chords';
  onAdd: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ type, onAdd }) => {
  const getContent = () => {
    switch (type) {
      case 'progression':
        return {
          icon: <Music className="w-16 h-16 text-white/40" />,
          title: 'No Chord Progressions',
          description: 'Create your first chord progression to start learning',
          buttonLabel: 'Add Progression',
        };
      case 'strumming':
        return {
          icon: <Guitar className="w-16 h-16 text-white/40" />,
          title: 'No Strumming Pattern',
          description: 'Add a strumming pattern to guide your practice',
          buttonLabel: 'Add Pattern'
        };
      case 'chords':
        return {
          icon: <Guitar className="w-16 h-16 text-white/40" />,
          title: 'No Chords Selected',
          description: 'Choose chords to build your progression',
          buttonLabel: 'Add Chords'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center max-w-md">
        <div className="flex justify-center mb-4">
          {content.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
        <p className="text-white/60 mb-6">{content.description}</p>
        <AddButton onClick={onAdd} label={content.buttonLabel} variant='primary' />
      </div>
    </div>
  );
};

export default EmptyState;