export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    userId: number;
    body?: string;
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