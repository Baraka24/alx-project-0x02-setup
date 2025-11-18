// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const Posts = () => {
  // Sample posts data
  const samplePosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      content: 'Next.js is a powerful React framework that enables you to build fast and user-friendly web applications. It provides features like server-side rendering, static site generation, and automatic code splitting.',
      author: 'John Doe',
      date: 'November 15, 2025',
    },
    {
      id: 2,
      title: 'Understanding TypeScript',
      content: 'TypeScript adds static typing to JavaScript, making your code more robust and maintainable. Learn how to leverage TypeScript to catch errors early and improve your development experience.',
      author: 'Jane Smith',
      date: 'November 16, 2025',
    },
    {
      id: 3,
      title: 'Tailwind CSS Best Practices',
      content: 'Tailwind CSS is a utility-first CSS framework that helps you build modern websites quickly. Discover best practices and tips for using Tailwind effectively in your projects.',
      author: 'Mike Johnson',
      date: 'November 17, 2025',
    },
    {
      id: 4,
      title: 'React Component Patterns',
      content: 'Explore common React component patterns that help you write cleaner, more maintainable code. From composition to render props, learn when and how to use each pattern.',
      author: 'Sarah Williams',
      date: 'November 18, 2025',
    },
    {
      id: 5,
      title: 'Building Responsive Layouts',
      content: 'Creating responsive layouts is essential for modern web development. Learn techniques and strategies for building layouts that work seamlessly across all device sizes.',
      author: 'David Brown',
      date: 'November 18, 2025',
    },
    {
      id: 6,
      title: 'State Management in React',
      content: 'Managing state effectively is crucial for building complex React applications. Explore different state management solutions and learn when to use each approach.',
      author: 'Emily Davis',
      date: 'November 18, 2025',
    },
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {samplePosts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-semibold">By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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

export default Posts;
