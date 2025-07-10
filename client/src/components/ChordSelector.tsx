import React, { useState } from 'react';
import { Search, X, Check } from 'lucide-react';
import { Chord } from '../types';
import { CHORD_LIBRARY } from '../data/chords';
import ChordDiagram from './ChordDiagram';

interface ChordSelectorProps {
  selectedChords: Chord[];
  onChordsChange: (chords: Chord[]) => void;
  onClose: () => void;
}

const ChordSelector: React.FC<ChordSelectorProps> = ({
  selectedChords,
  onChordsChange,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSelectedChords, setTempSelectedChords] = useState<Chord[]>(selectedChords);

  const filteredChords = CHORD_LIBRARY.filter(chord =>
    chord.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isChordSelected = (chord: Chord) => {
    return tempSelectedChords.some(selected => selected.name === chord.name);
  };

  const toggleChord = (chord: Chord) => {
    if (isChordSelected(chord)) {
      setTempSelectedChords(prev => prev.filter(c => c.name !== chord.name));
    } else {
      setTempSelectedChords(prev => [...prev, chord]);
    }
  };

  const handleSave = () => {
    onChordsChange(tempSelectedChords);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Select Chords</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search chords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Selected chords preview */}
        {tempSelectedChords.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white/80 text-sm font-medium mb-3">
              Selected ({tempSelectedChords.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {tempSelectedChords.map((chord, index) => (
                <div
                  key={`${chord.name}-${index}`}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2"
                >
                  {chord.name}
                  <button
                    onClick={() => toggleChord(chord)}
                    className="hover:bg-white/20 rounded-full p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chord grid */}
        <div className="overflow-y-auto max-h-96 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredChords.map((chord) => (
              <div
                key={chord.name}
                onClick={() => toggleChord(chord)}
                className={`relative cursor-pointer p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isChordSelected(chord)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {isChordSelected(chord) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <ChordDiagram chord={chord} size="small" showName={true} />
              </div>
            ))}
          </div>
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
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Save Selection ({tempSelectedChords.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChordSelector;