// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;