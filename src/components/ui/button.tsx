import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: string; // Add this line
    size?: string;    // Add this line
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={`btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;
