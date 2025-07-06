import React, { useState } from 'react';
import { X, Plus, Minus, Play, ArrowDown, ArrowUp } from 'lucide-react';
import { STRUMMING_PATTERNS } from '../data/chords';

interface StrummingPatternSelectorProps {
  currentPattern: string[];
  onPatternChange: (pattern: string[]) => void;
  onClose: () => void;
}

const StrummingPatternSelector: React.FC<StrummingPatternSelectorProps> = ({
  currentPattern,
  onPatternChange,
  onClose
}) => {
  const [customPattern, setCustomPattern] = useState<string[]>(currentPattern);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const addStroke = (stroke: 'D' | 'U') => {
    setCustomPattern(prev => [...prev, stroke]);
  };

  const removeStroke = (index: number) => {
    setCustomPattern(prev => prev.filter((_, i) => i !== index));
  };

  const selectPreset = (pattern: string[]) => {
    setCustomPattern(pattern);
    setSelectedPreset(pattern.join(''));
  };

  const handleSave = () => {
    onPatternChange(customPattern);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 max-w-2xl w-full border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Strumming Pattern</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Preset patterns */}
        <div className="mb-6">
          <h3 className="text-white/80 text-sm font-medium mb-3">Preset Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {STRUMMING_PATTERNS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => selectPreset(preset.pattern)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedPreset === preset.pattern.join('')
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{preset.name}</span>
                  <span className="text-white/60 text-sm">{preset.bpm} BPM</span>
                </div>
                <div className="flex gap-1">
                  {preset.pattern.map((stroke, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs text-white"
                    >
                      {stroke === 'D' ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />}
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom pattern builder */}
        <div className="mb-6">
          <h3 className="text-white/80 text-sm font-medium mb-3">Custom Pattern</h3>
          
          {/* Current pattern */}
          <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
            <div className="flex flex-wrap gap-2 mb-4">
              {customPattern.map((stroke, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium">
                    {stroke === 'D' ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                  </div>
                  <button
                    onClick={() => removeStroke(index)}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Minus className="w-3 h-3 text-white" />
                  </button>
                </div>
              ))}
              
              {customPattern.length === 0 && (
                <div className="text-white/40 text-sm py-4">
                  No strokes added yet. Use the buttons below to build your pattern.
                </div>
              )}
            </div>
            
            {/* Add stroke buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => addStroke('D')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowDown className="w-4 h-4" />
                <span>Down</span>
              </button>
              <button
                onClick={() => addStroke('U')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Up</span>
              </button>
            </div>
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
            disabled={customPattern.length === 0}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Pattern
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrummingPatternSelector;