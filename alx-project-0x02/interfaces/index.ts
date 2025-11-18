export interface User {
    id: number;
    name: string;
    email: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}