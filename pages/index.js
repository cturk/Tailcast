import { useState } from 'react';
import { motion } from 'framer-motion';

// Newsletter Component
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, subtitle, features, ctaText }) => (
  <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
    <span className="text-4xl mb-4 block">{icon}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-blue-600 font-medium mb-4">{subtitle}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      {ctaText}
    </button>
  </div>
);

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Focule: Unlock Your Potential, Amplify Your Progress
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Transform Your Professional Journey with Intelligent Tools
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-100">
            At Focule, we believe in empowering professionals and entrepreneurs through smart, 
            intuitive tools that simplify complex challenges and accelerate personal growth.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features/Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔍"
              title="Resume Catalyst"
              subtitle="Free Professional Resume Review"
              features={[
                "Instant, AI-powered resume analysis",
                "Identify hidden strengths and improvement areas",
                "Unlock your true professional potential"
              ]}
              ctaText="Learn More"
            />
            <FeatureCard
              icon="🌐"
              title="Namecraft"
              subtitle="Domain Name Idea Generator"
              features={[
                "Creative, intelligent domain name suggestions",
                "Instant availability checks",
                "Spark your entrepreneurial vision"
              ]}
              ctaText="Explore Now"
            />
            <FeatureCard
              icon="💡"
              title="Project Pulse"
              subtitle="Quick Project Cost Estimator"
              features={[
                "Accurate, instant project budget predictions",
                "Tailored for freelancers and small businesses",
                "Make informed financial decisions with confidence"
              ]}
              ctaText="Start Estimating"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Focule?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Intelligent Design",
                description: "AI-powered tools that work smarter, not harder"
              },
              {
                title: "Zero Barriers",
                description: "Free access to core features"
              },
              {
                title: "Continuous Improvement",
                description: "Tools that evolve with your needs"
              },
              {
                title: "Privacy First",
                description: "Your data, your control"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {["Advanced analytics", "Deeper integrations", "Expanded tool ecosystem"].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Focule Community</h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about updates, new tools, and exclusive insights.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            {/* Add your social media icons here */}
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
          <p className="text-center text-gray-400">
            © 2024 Focule Technologies | Powering Professional Potential
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage; 