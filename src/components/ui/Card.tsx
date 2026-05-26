import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-brand-cream border border-brand-border rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}
