
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  const handleWhatsAppClick = () => {
    const phoneNumber = '9740925835';
    const message = 'Hi! I would like to know more about your saree collections.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SOWRAASHI
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Designer's Boutique & Sarees Collection - Creating timeless elegance with our 
              exquisite saree collections and custom designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-pink-400 transition-colors">Collections</Link></li>
              <li><Link to="/profile" className="text-gray-300 hover:text-pink-400 transition-colors">Profile</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+91 9740925835</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-pink-400" />
                  <span>WhatsApp</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">info@sowraashi.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                <span className="text-gray-300">First floor, Manjunath arcade,<br />No -21/38, main road, opposite Medplus,<br />Bengaluru, 560064, KA, IN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 SOWRAASHI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}