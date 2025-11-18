// pages/home.tsx
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type PostProps } from '@/interfaces';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    const newPost: PostProps = {
      id: Date.now(),
      title: post.title,
      content: post.content,
      createdAt: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover amazing features designed to help you succeed. Explore our services below.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New Post
          </button>
        </div>

        {/* User Posts Section */}
        {posts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mt-3 text-sm text-gray-500">
                    Posted on: {post.createdAt}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card
            title="🚀 Fast Performance"
            content="Experience lightning-fast loading times and seamless interactions. Our optimized platform ensures you get the best performance possible."
            className="hover:shadow-lg transition-shadow duration-300"
          />

          <Card
            title="🔒 Secure & Safe"
            content="Your data's security is our top priority. We use enterprise-grade encryption and follow industry best practices to keep your information safe."
            className="hover:shadow-lg transition-shadow duration-300"
          />

          <Card
            title="💡 Easy to Use"
            content="Intuitive interface that anyone can master. No technical knowledge required - just focus on what matters most to you."
            className="hover:shadow-lg transition-shadow duration-300"
          />

          <Card
            title="🌍 Global Reach"
            content="Access our services from anywhere in the world. We support multiple languages and currencies for a truly global experience."
            className="hover:shadow-lg transition-shadow duration-300"
          />

          <Card
            title="🛠️ Customizable"
            content="Tailor the platform to your specific needs. Flexible settings and options allow you to create the perfect workflow."
            className="hover:shadow-lg transition-shadow duration-300"
          />

          <Card
            title="📈 Growth Focused"
            content="Tools and analytics to help you grow. Track your progress and make data-driven decisions with our comprehensive dashboard."
            className="hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              title="⭐ Excellent Service"
              content="This platform has transformed how we work. The features are intuitive and the support team is incredibly responsive. Highly recommended!"
              className="bg-yellow-50 border-yellow-200"
              titleClassName="text-yellow-800"
            />

            <Card
              title="💫 Game Changer"
              content="I've tried many similar services, but this one stands out. The attention to detail and user experience is exceptional. Worth every penny!"
              className="bg-purple-50 border-purple-200"
              titleClassName="text-purple-800"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              title="Basic Plan"
              content="Perfect for individuals and small projects. Get started with all the essential features."
              className="text-center border-2 border-blue-200"
            >
              <div className="mt-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">$9.99</div>
                <div className="text-gray-600 mb-4">per month</div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            </Card>

            <Card
              title="Pro Plan"
              content="Ideal for growing businesses. Advanced features and priority support included."
              className="text-center border-2 border-purple-300 shadow-lg relative"
            >
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg">
                Popular
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">$19.99</div>
                <div className="text-gray-600 mb-4">per month</div>
                <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                  Get Started
                </button>
              </div>
            </Card>

            <Card
              title="Enterprise"
              content="For large organizations. Custom solutions and dedicated account management."
              className="text-center border-2 border-gray-300"
            >
              <div className="mt-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">$49.99</div>
                <div className="text-gray-600 mb-4">per month</div>
                <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition">
                  Contact Sales
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card
            title="Ready to Get Started?"
            content="Join thousands of satisfied users today. Start your journey with us and experience the difference."
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none max-w-2xl mx-auto"
            titleClassName="text-white text-2xl"
            contentClassName="text-blue-100"
          >
            <div className="mt-6 space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Sign Up Free
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Schedule Demo
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
