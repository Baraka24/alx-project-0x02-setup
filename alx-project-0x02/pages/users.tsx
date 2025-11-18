// pages/users.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Meet the talented individuals who make our platform amazing
            </p>
          </div>
        </section>

        {/* Users Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {users.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{users.length}</span> team members
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-600">
                <p>No users found.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {users.length}+
                </div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {users.length * 10}+
                </div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {users.length * 5}+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                We are always looking for talented individuals to join our growing team.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    
    return {
      props: {
        users: [],
      },
      revalidate: 60,
    };
  }
};

export default Users;
