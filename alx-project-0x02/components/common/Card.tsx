// components/common/Card.tsx
import React from 'react';
import { type CardProps } from '@/interfaces';

interface ExtendedCardProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Card: React.FC<ExtendedCardProps> = ({
  title,
  content,
  children,
  className = '',
  titleClassName = '',
  contentClassName = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}`}>
      <div className="p-6">
        {/* Title Section */}
        <h3 className={`text-xl font-semibold text-gray-800 mb-3 ${titleClassName}`}>
          {title}
        </h3>

        {/* Content Section */}
        <p className={`text-gray-600 leading-relaxed ${contentClassName}`}>
          {content}
        </p>

        {/* Optional Children */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;