import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export function Favorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  const removeFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== productId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Favorites
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Your saved saree collections
            </p>
          </motion.div>
        </div>

        {/* Favorites Count */}
        {favoriteProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span>{favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} in your favorites</span>
            </div>
          </motion.div>
        )}

        {/* Favorites Grid */}
        {favoriteProducts.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  {/* Remove from Favorites Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFavorite(product.id);
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    title="Remove from favorites"
                  >
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 hover:text-red-600" />
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
                    <span className="text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
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
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No favorites yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Start browsing our saree collections and add items to your favorites by clicking the heart icon.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}