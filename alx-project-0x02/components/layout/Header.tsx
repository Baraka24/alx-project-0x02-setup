import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    Logo
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/home" className="text-gray-600 hover:text-gray-900">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className="text-gray-600 hover:text-gray-900">
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;