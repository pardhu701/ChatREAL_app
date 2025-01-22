import  { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { MessagesSquare, Globe, Shield, Zap, ArrowRight } from 'lucide-react';


export default function Intro() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="relative mx-auto w-24 h-24 mb-8">
              <MessagesSquare className="w-24 h-24 text-purple-500" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect Instantly with <span className="text-purple-500">Texter.cc</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Experience real-time messaging with a beautiful, secure, and lightning-fast platform designed for modern communication.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/SignUpPage"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/SignUpPage"
                className="border border-gray-700 hover:border-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                Sign In
              </Link>
             
            
            </div>
          </div>
        </div>

        {/* Animated background gradient */}
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Real-time Messaging */}
          <div className="animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
            <div className="bg-gray-800 rounded-xl p-8 h-full border border-gray-700 hover:border-purple-500 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Messaging</h3>
              <p className="text-gray-400">
                Experience instant message delivery with real-time typing indicators and message status updates.
              </p>
            </div>
          </div>

          {/* Global Reach */}
          <div className="animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
            <div className="bg-gray-800 rounded-xl p-8 h-full border border-gray-700 hover:border-purple-500 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
              <p className="text-gray-400">
                Connect with anyone, anywhere in the world with our reliable and fast messaging infrastructure.
              </p>
            </div>
          </div>

          {/* Secure Communication */}
          <div className="animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
            <div className="bg-gray-800 rounded-xl p-8 h-full border border-gray-700 hover:border-purple-500 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure Communication</h3>
              <p className="text-gray-400">
                Your messages are protected with end-to-end encryption, ensuring your conversations stay private.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to start messaging?
              </h2>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Texter.cc for their daily communications. Sign up now and experience the future of messaging.
              </p>
              <Link
                to="/SignUpPage"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center group"
              >
                Create Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}