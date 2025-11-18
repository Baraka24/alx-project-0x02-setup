// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Blog Posts</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the latest articles, tutorials, and insights from our team
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {posts.length === 0 && (
              <div className="text-center text-gray-600">
                <p>No posts found.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Contribute?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We are always looking for talented writers to share their knowledge and experience with our community.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Submit Your Article
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    
    // Map API data to our PostProps interface
    const posts: PostProps[] = data.slice(0, 12).map((post: { id: number; title: string; body: string; userId: number }) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      userId: post.userId,
      body: post.body,
    }));

    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
};

export default Posts;
