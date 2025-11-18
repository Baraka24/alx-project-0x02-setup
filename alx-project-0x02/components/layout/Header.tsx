import React from 'react';

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
                            <a href="/" className="text-gray-600 hover:text-gray-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-600 hover:text-gray-900">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-600 hover:text-gray-900">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;