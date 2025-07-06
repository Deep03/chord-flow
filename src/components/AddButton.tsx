import React from 'react';
import { Plus } from 'lucide-react';

interface AddButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const baseClasses =
  'group flex items-center gap-2 px-4 py-2 text-white rounded-xl transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 hover:scale-105 shadow-lg hover:shadow-purple-500/30';

const variantClasses = {
  primary: 'mx-auto',
  secondary: 'ml-auto bg-white/10 hover:bg-white/20 text-white hover:scale-105',
  ghost: 'ml-auto bg-transparent border border-white/20 hover:bg-white/10 text-white',
};


const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  label,
  className = '',
  variant,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variant ? variantClasses[variant] : ''} ${className}`}
    >

      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default AddButton;


