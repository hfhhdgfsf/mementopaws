'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-walnut-500 text-ivory-50 hover:bg-walnut-600 shadow-soft hover:shadow-medium',
  secondary: 'bg-ivory-200 text-walnut-600 hover:bg-ivory-300 shadow-soft',
  outline: 'border border-walnut-500/30 text-walnut-600 hover:bg-walnut-50 hover:border-walnut-500/50',
  ghost: 'text-walnut-500 hover:bg-walnut-500/5',
};

const sizeStyles = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium tracking-wide
    rounded-full
    transition-all duration-500 ease-out
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  if (href) {
    return (
      <motion.div
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </motion.button>
  );
}
