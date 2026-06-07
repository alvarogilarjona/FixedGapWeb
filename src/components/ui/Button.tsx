import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondary-white' | 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  href?: string;
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', href, onClick, asChild = false, className = '', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-brand-blue text-white hover:opacity-90',
      secondary: 'border border-brand-blue text-brand-blue hover:bg-brand-beige',
      'secondary-white': 'border border-white text-white hover:bg-white/10',
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    };

    const sizes = {
      default: 'px-6 py-3',
      sm: 'px-3 py-2 text-xs',
      lg: 'px-8 py-4',
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (asChild) {
      return <Slot className={classes}>{children}</Slot>;
    }

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
)

Button.displayName = "Button"

export default Button
export { Button }
