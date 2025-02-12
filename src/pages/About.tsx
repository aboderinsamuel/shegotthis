import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Heart, Target, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We believe in empowering every girl to reach her full potential through education, mentorship, and support.'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Creating a safe and inclusive environment where every girl feels valued, respected, and heard.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, setting high standards for our programs and impact.'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Developing the next generation of female leaders through practical skills and real-world experience.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Yes She Can Initiative was founded with a simple yet powerful vision: to create a world where every girl has the opportunity to achieve her dreams. Since our inception, we've been dedicated to empowering young women through education, mentorship, and community support.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <value.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Impact
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  Since our establishment, we've reached over 1,000 girls through our various programs and initiatives. Our impact extends beyond numbers – we're creating lasting change in communities and inspiring the next generation of female leaders.
                </p>
                <p className="mb-6">
                  Through our mentorship programs, we've connected young girls with successful women in various fields, providing them with role models and guidance for their future careers.
                </p>
                <p>
                  Our commitment to education has helped numerous girls access quality learning resources, develop essential skills, and pursue their academic dreams with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}