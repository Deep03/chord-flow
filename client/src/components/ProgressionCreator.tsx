import React, { useState } from 'react';
import { X, Save, Music } from 'lucide-react';
import { Chord, ChordProgression } from '../types';
import ChordSelector from './ChordSelector';
import ChordDiagram from './ChordDiagram';

interface ProgressionCreatorProps {
  onSave: (progression: ChordProgression) => void;
  onClose: () => void;
}

const ProgressionCreator: React.FC<ProgressionCreatorProps> = ({
  onSave,
  onClose
}) => {
  const [name, setName] = useState('');
  const [selectedChords, setSelectedChords] = useState<Chord[]>([]);
  const [showChordSelector, setShowChordSelector] = useState(false);

  const handleSave = () => {
    if (name.trim() && selectedChords.length > 0) {
      const progression: ChordProgression = {
        id: Date.now().toString(),
        name: name.trim(),
        chords: selectedChords,
        strummingPattern: ['D', 'D', 'U', 'U', 'D', 'U'], // Default pattern
        createdAt: new Date()
      };
      localStorage.setItem('chord_progression', JSON.stringify(progression));
      onSave(progression);
      onClose();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 max-w-2xl w-full border border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Create Progression</h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Progression name */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Progression Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Wonderwall, House of the Rising Sun..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Selected chords */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80 text-sm font-medium">
                Chords ({selectedChords.length})
              </label>
              <button
                onClick={() => setShowChordSelector(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                {selectedChords.length === 0 ? 'Add Chords' : 'Edit Chords'}
              </button>
            </div>
            
            {selectedChords.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                {selectedChords.map((chord, index) => (
                  <div key={`${chord.name}-${index}`} className="text-center">
                    <ChordDiagram chord={chord} size="small" showName={true} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white/5 rounded-xl border border-white/10 text-center">
                <Music className="w-12 h-12 text-white/40 mx-auto mb-3" />
                <p className="text-white/60">No chords selected yet</p>
                <p className="text-white/40 text-sm">Click "Add Chords" to get started</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!name.trim() || selectedChords.length === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              Create Progression
            </button>
          </div>
        </div>
      </div>

      {/* Chord selector modal */}
      {showChordSelector && (
        <ChordSelector
          selectedChords={selectedChords}
          onChordsChange={setSelectedChords}
          onClose={() => setShowChordSelector(false)}
        />
      )}
    </>
  );
};

export default ProgressionCreator;