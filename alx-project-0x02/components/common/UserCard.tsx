// components/common/UserCard.tsx
import React from 'react';
import { type UserProps } from '@/interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, email, username, phone, website, address, company } = user;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-24"></div>
      
      <div className="p-6 -mt-12">
        {/* Avatar */}
        <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mx-auto mb-4">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {name.charAt(0)}
          </div>
        </div>

        {/* User Name */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
          {name}
        </h3>

        {/* Username */}
        <p className="text-sm text-gray-500 text-center mb-4">@{username}</p>

        {/* Contact Information */}
        <div className="space-y-3 mb-4">
          {/* Email */}
          <div className="flex items-center gap-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600 truncate">{email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-600">{phone}</span>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 truncate">
              {website}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">
              {address.suite}, {address.street}<br />
              {address.city}, {address.zipcode}
            </span>
          </div>
        </div>

        {/* Company */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-gray-900 text-sm">{company.name}</span>
          </div>
          <p className="text-xs text-gray-500 italic">{company.catchPhrase}</p>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
