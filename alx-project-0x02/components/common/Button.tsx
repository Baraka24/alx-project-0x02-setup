// components/common/Button.tsx
import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 border border-purple-600',
    outline: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300',
  };

  const buttonClasses = `
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${variantClasses[variant]}
    font-semibold
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-blue-500
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
