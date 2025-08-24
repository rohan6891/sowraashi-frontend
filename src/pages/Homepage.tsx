import { motion } from 'framer-motion';
import { Crown, Sparkles, Heart, Palette, Star, Gem } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import '../assets/background.css';

export function Homepage() {

  const features = [
    {
      icon: Crown,
      title: 'Silk Collections',
      description: 'Premium silk sarees that showcase elegance and traditional craftsmanship'
    },
    {
      icon: Sparkles,
      title: 'Designer Wear',
      description: 'Exclusive designer sarees for special occasions and celebrations'
    },
    {
      icon: Heart,
      title: 'Quality Assured',
      description: 'Premium quality materials and expert tailoring for perfect fit'
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Personalized saree designs tailored to your measurements and preferences'
    },
    {
      icon: Star,
      title: 'Bridal Collection',
      description: 'Stunning bridal sarees for your most special day'
    },
    {
      icon: Gem,
      title: 'Party Wear',
      description: 'Glamorous party wear sarees for social gatherings and events'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-900 overflow-hidden">
        {/* Background image with black shade */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: 'url(/uploads/bg.png)' }}></div>
        {/* Black shade overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
            
            {/* Left Image */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-2xl">
                <img 
                  src="/uploads/8.png" 
                  alt="Collection 1" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating Discount */}
                <motion.div 
                  className="absolute -top-3 -left-3 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-lg"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-pink-600">Premium Collection</div>
                  </div>
                </motion.div>

                {/* Product Info */}
                <div className="absolute -bottom-3 left-4 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Silk Saree</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Traditional Wear</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <motion.div 
                className="mt-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white">620</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Satisfied Clients</div>
              </motion.div>
            </motion.div>

            {/* Center Content */}
            <motion.div 
              className="text-center order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src="/uploads/dark logo.png" 
                  alt="SOWRAASHI Logo" 
                  className="h-16 w-auto mx-auto filter dark:brightness-0 dark:invert"
                />
              </div>

              {/* Brand Name */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                SOWRAASHI
              </h2>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Make Your{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Beautiful
                </span>
                <br />
                Collection
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  Explore
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors duration-300"
                >
                  Custom Designer
                </motion.button>
              </div>

              {/* Scroll Down */}
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">Scroll Down</div>
              </div>

              {/* Bottom Message */}
              <div className="mt-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                  Good things are waiting for you
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative order-3 lg:order-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-2xl">
                <img 
                  src="/uploads/9.png" 
                  alt="Collection 2" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-3 -right-3 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-lg"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-600">New</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Collection</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-3 right-4 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-lg"
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <div className="text-xs text-gray-600 dark:text-gray-300 max-w-24 text-center">
                    Premium Quality Guaranteed
                  </div>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div 
                className="mt-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white">25k</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Admiring seller</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Features Section */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SOWRAASHI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the finest in traditional and contemporary saree designs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             {/* Product Showcase Section */}
       <section className="py-16 bg-slate-800">
        <ProductShowcase />
      </section>
    </div>
  );
}