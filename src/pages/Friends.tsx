import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Book,
  Users,
  Globe,
  Briefcase,
  Heart,
  Star,
  Target,
  Award,
} from "lucide-react";

import img6 from "../assets/images/img6.jpg";

export default function FriendsPage() {
  const missionValues = [
    {
      icon: Heart,
      title: "Empowering Newcomers",
      description:
        "Building stronger communities through immigrant support and integration",
    },
    {
      icon: Star,
      title: "Skill Development",
      description:
        "Providing essential training and education for success in Canada",
    },
    {
      icon: Target,
      title: "Community Building",
      description: "Creating meaningful connections and support networks",
    },
    {
      icon: Award,
      title: "Personal Growth",
      description: "Fostering confidence and independence in newcomers",
    },
  ];

  const programs = [
    {
      icon: Book,
      title: "Computer Training for Newcomers",
      description:
        "Free computer training program designed to help newcomers develop essential digital skills, including Microsoft Office applications, internet navigation, and email usage.",
      action: "Sign up for Computer Training",
      primary: true,
    },
    {
      icon: Users,
      title: "Sports and Recreation Program",
      description:
        "Stay active and connect with others through our community sports leagues, fitness sessions, and special March Break Camps for kids and youth.",
      action: "Sign up for March Break Camp",
      primary: false,
    },
    {
      icon: Globe,
      title: "Language Support & ESL Classes",
      description:
        "Tailored English as a Second Language (ESL) classes to improve communication skills, gain confidence in speaking and writing, and enhance workplace communication.",
      action: "Sign up for ESL Classes",
      primary: false,
    },
    {
      icon: Briefcase,
      title: "Employment Readiness Workshops",
      description:
        "Comprehensive employment support including resume writing, interview coaching, networking opportunities, and career guidance.",
      action: "Sign up for Employment Workshops",
      primary: false,
    },
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
                Friends of Humanity
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are dedicated to supporting new immigrants in Canada by
                providing essential resources, training, and recreational
                opportunities to help them settle and thrive in their new home.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Mission
              </h2>

              {/* Main Mission Statement */}
              <div className="text-center mb-16">
                <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                  We believe that a strong, inclusive community begins with
                  empowering newcomers.
                </p>
                <div className="flex justify-center">
                  <img
                    src={img6}
                    alt="Community Support"
                    className="rounded-lg shadow-lg mb-8"
                  />
                </div>
              </div>

              {/* Mission Values Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {missionValues.map((value) => (
                  <div
                    key={value.title}
                    className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-block p-3 bg-pink-50 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <program.icon className="h-12 w-12 text-pink-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{program.description}</p>
                  <button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                      program.primary
                        ? "bg-pink-600 text-white hover:bg-pink-700"
                        : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                    }`}
                  >
                    {program.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                Contact Us
              </h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-center justify-center space-x-4">
                  <span role="img" aria-label="location" className="text-3xl">
                    📍
                  </span>
                  <p className="text-lg font-medium">
                    1274 Kennedy Road, Scarborough, Ontario, ON M1P 2L4
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span role="img" aria-label="phone" className="text-3xl">
                    📞
                  </span>
                  <p className="text-lg font-medium">416-902-3030</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span role="img" aria-label="email" className="text-3xl">
                    📧
                  </span>
                  <p className="text-lg font-medium">
                    friendshumanity2@gmail.com
                  </p>
                </div>
              </div>
              <p className="mt-10 text-xl text-gray-700">
                Join us in making a difference! Connect with Friends of Humanity
                today and become part of a welcoming, supportive community.
              </p>
              <div className="mt-10">
                <button className="bg-pink-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
