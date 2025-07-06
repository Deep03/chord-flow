import React from 'react';
import { Plus } from 'lucide-react';

interface AddButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, label, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 ${className}`}
    >
      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default AddButton;