import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Heart } from 'lucide-react';
import { products } from '../data/products';

interface AdminProduct {
  _id: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  price: number;
  originalPrice?: number;
  discount: number;
  inStock: boolean;
  sizes: string[];
  colors: string[];
  material: string;
  blouseLength?: string;
  sareeLength?: string;
  careInstructions: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export function Products() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get('filter');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [newlyAddedProducts, setNewlyAddedProducts] = useState<AdminProduct[]>([]);
  const [allProducts, setAllProducts] = useState(products);

  // Fetch newly added products from admin dashboard
  const fetchNewlyAddedProducts = async () => {
    try {
      // Get products from localStorage that were added through admin dashboard
      const adminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]') as AdminProduct[];
      
      // Filter products added in the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const recentProducts = adminProducts.filter(product => {
        const createdDate = new Date(product.createdAt);
        return createdDate > thirtyDaysAgo;
      });
      
      setNewlyAddedProducts(recentProducts);
    } catch (error) {
      console.error('Error fetching newly added products:', error);
    }
  };

  // Combine existing saree products with newly added products
  const existingSareeProducts = products.filter(product => 
    ['silk', 'cotton', 'designer', 'bridal', 'party', 'casual'].includes(product.category)
  );
  
  // Convert newly added products to match the existing product format
  const convertedNewProducts = newlyAddedProducts.map(adminProduct => ({
    id: adminProduct._id,
    name: adminProduct.name,
    category: adminProduct.category as any,
    image: adminProduct.image,
    shortDescription: adminProduct.shortDescription,
    fullDescription: adminProduct.fullDescription,
    features: adminProduct.features,
    usage: [],
    ingredients: [],
    safetyTips: adminProduct.careInstructions,
    price: `₹${adminProduct.price}`,
    inStock: adminProduct.inStock,
    application: adminProduct.material
  }));
  
  const filteredProducts = [...existingSareeProducts, ...convertedNewProducts];

  const currentProduct = filteredProducts[currentProductIndex] || products[0];

  // Auto-change product every 7 seconds
  useEffect(() => {
    fetchNewlyAddedProducts();
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % filteredProducts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [filteredProducts.length]);

  // Check if a product is newly added
  const isNewlyAdded = (productId: string) => {
    return newlyAddedProducts.some(product => product._id === productId);
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div 
      className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/uploads/product%20back%20(2).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-end mb-12">
          <Link
            to="/contact"
            className="border border-white/50 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
          >
            Health Check
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[600px]">
          
          {/* Left Content - Dynamic Product Description */}
          <div className="lg:col-span-1">
            <motion.div
              key={`left-${currentProduct.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Product Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white/80 text-sm font-medium capitalize">{currentProduct.category} Solution</span>
              </div>
              
              {/* Product Description */}
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {currentProduct.description || currentProduct.shortDescription}
              </p>
              
              {/* Product Name as Main Heading */}
              <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
                {currentProduct.name.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {index === currentProduct.name.split(' ').length - 1 ? (
                      <span className="font-normal">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>
              
              {/* Product Details */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Category</h4>
                  <p className="text-white font-medium capitalize">{currentProduct.category}</p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Application</h4>
                  <p className="text-white font-medium">All Crops</p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Availability</h4>
                  <p className={`font-medium ${currentProduct.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {currentProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Type</h4>
                  <p className="text-white font-medium">Premium Quality</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  to={`/products/${currentProduct.id}`}
                  className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-white/20"
                >
                  <span>Learn More About {currentProduct.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Center - Product Showcase */}
          <div className="lg:col-span-1 flex justify-center">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Product Image Container */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/30 to-amber-400/30 rounded-full blur-3xl"></div>
                
                {/* Product Image */}
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
                />
                
                {/* Reflection Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 opacity-20">
                  <img
                    src={currentProduct.image}
                    alt=""
                    className="w-full h-full object-contain transform scale-y-[-1] blur-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white/80 text-lg">
                  Select from our team<br />
                  of highly skilled and<br />
                  experienced products
                </h3>
                <button
                  onClick={nextProduct}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-sm mr-2">Next</span>
                  <ChevronRight className="w-5 h-5 inline" />
                </button>
              </div>

              {/* Product Card */}
              <motion.div
                key={`card-${currentProduct.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{currentProduct.name}</h4>
                    <p className="text-white/60 text-sm capitalize">{currentProduct.category}</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {currentProduct.shortDescription}
                </p>
                
                <div className="flex items-center justify-end">
                  <Link
                    to={`/products/${currentProduct.id}`}
                    className="text-white/80 hover:text-white text-sm flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Product Navigation Dots */}
              <div className="flex items-center space-x-2 mb-8">
                {filteredProducts.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProductIndex ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Browse All Button */}
              <Link
                to="#all-products"
                className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('all-products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* All Products Section - Updated for Sarees */}
      <section id="all-products" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">All Products</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Explore our complete range of exquisite saree collections</p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain bg-gray-50 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-500 p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x200/f3f4f6/6b7280?text=Image+Not+Found';
                    }}
                  />
                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
                    title={favorites.includes(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                    style={{ zIndex: 9999 }}
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        favorites.includes(product.id)
                          ? 'text-red-500 fill-red-500'
                          : 'text-gray-600 hover:text-red-500'
                      }`}
                    />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center space-x-2 bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full capitalize">
                        {product.category}
                      </span>
                      {isNewlyAdded(product.id) && (
                        <span className="text-xs font-bold text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30 px-2 py-1 rounded-full animate-pulse">
                          NEWLY ADDED
                        </span>
                      )}
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      product.inStock 
                        ? 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30' 
                        : 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}