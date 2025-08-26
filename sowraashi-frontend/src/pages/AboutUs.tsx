import { motion } from 'framer-motion';
import { Users, Target, Globe, Leaf, Heart, Droplets, Shield, Sprout, Zap, FlaskConical, Sparkles, Crown, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function AboutUs() {
  const { theme } = useTheme();
  
  const values = [
    {
      icon: Heart,
      title: 'Tradition & Love',
      description: 'Every saree is crafted with deep respect for traditional techniques, infused with love and care that has been passed down through generations.'
    },
    {
      icon: Crown,
      title: 'Premium Quality',
      description: 'We source the finest fabrics and materials to ensure each saree meets the highest standards of quality, elegance, and durability.'
    },
    {
      icon: Sparkles,
      title: 'Diverse Collection',
      description: 'From traditional silk sarees to contemporary designs, we offer an extensive range to suit every occasion and personal style.'
    },
    {
      icon: Users,
      title: 'Customer Care',
      description: 'We work closely with our customers to understand their needs and help them find the perfect saree for their special moments.'
    }
  ];



  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SOWRAASHI</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Where tradition meets elegance - crafting beautiful sarees with love and heritage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Solutions Section */}
      <section className={`py-32 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Choose <span className="text-amber-600">SOWRAASHI?</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              At SOWRAASHI, we believe every saree tells a story. Our collection celebrates the rich heritage of Indian textiles while embracing contemporary elegance.
            </p>
          </div>

          {/* First Row - 3 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {/* Box 1: Traditional Craftsmanship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Traditional Craftsmanship
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Each saree is meticulously handcrafted using time-honored techniques passed down through generations.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Premium Fabrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Crown className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Premium Fabrics
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  We source only the finest silk, cotton, and blended fabrics to ensure luxurious feel and lasting beauty.
                </p>
              </div>
            </motion.div>

            {/* Box 3: Diverse Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Diverse Collection
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  From traditional Kanjeevaram to contemporary designer sarees - we have something for every occasion.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 3 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Box 4: Handloom Heritage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Globe className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Handloom Heritage
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Supporting traditional weavers and preserving the ancient art of handloom weaving for future generations.
                </p>
              </div>
            </motion.div>

            {/* Box 5: Custom Designs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Star className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Custom Designs
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Personalized saree designs tailored to your preferences, making every piece unique and special.
                </p>
              </div>
            </motion.div>

            {/* Box 6: Affordable Luxury */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-amber-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>
                  Affordable Luxury
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Premium quality sarees at competitive prices, making elegance accessible to every woman.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Values</h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              These core values guide every decision we make and every product we develop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'}`}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                  <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              To empower farmers worldwide with innovative, sustainable agricultural solutions 
              that increase productivity, protect the environment, and contribute to global food security 
              while preserving our planet for future generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}