// components/common/PostCard.tsx
import React, { useMemo } from 'react';
import { type PostProps } from '@/interfaces';

interface PostCardProps {
  post: PostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, content, userId, id } = post;

  // Generate stable random-looking numbers based on post id
  const likes = useMemo(() => ((id * 7) % 100) + 1, [id]);
  const comments = useMemo(() => ((id * 3) % 50) + 1, [id]);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        {/* User Badge */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {userId}
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-700">User {userId}</p>
            <p className="text-xs text-gray-500">Posted recently</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 capitalize">
          {title}
        </h3>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {content}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
            Read More →
          </button>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
