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