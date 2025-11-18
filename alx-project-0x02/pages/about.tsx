// components/about.tsx
import React from 'react';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're passionate about creating solutions that make a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Founded in 2020, we started as a small team with a big vision: to revolutionize
                  the way people interact with technology. Our journey began in a humble garage
                  where passion and innovation collided.
                </p>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Today, we've grown into a diverse team of thinkers, creators, and problem-solvers
                  dedicated to delivering exceptional experiences to our users worldwide.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe in the power of technology to create positive change and are committed
                  to building products that are both beautiful and functional.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe great things happen when diverse minds work together towards a common goal.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our users and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Interactive Buttons</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="small" shape="rounded-sm" variant="primary">
              Small Button
            </Button>
            <Button size="medium" shape="rounded-md" variant="secondary">
              Medium Button
            </Button>
            <Button size="large" shape="rounded-full" variant="outline">
              Large Button
            </Button>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
