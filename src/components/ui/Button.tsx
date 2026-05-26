import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondary-white';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-all duration-150';
  const variants = {
    primary: 'bg-brand-blue text-white hover:opacity-90',
    secondary: 'border border-brand-blue text-brand-blue hover:bg-brand-beige',
    'secondary-white': 'border border-white text-white hover:bg-white/10',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
