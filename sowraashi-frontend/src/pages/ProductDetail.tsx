import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Star, Leaf, CheckCircle, Info } from 'lucide-react';
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

export function ProductDetail() {
  const { id } = useParams();
  const [adminProducts, setAdminProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch admin products from API
  useEffect(() => {
    const fetchAdminProducts = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setAdminProducts(data.products || []);
        }
      } catch (error) {
        console.error('Error fetching admin products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAdminProducts();
  }, []);
  
  // First try to find in static products
  let product = products.find(p => p.id === id);
  
  // If not found in static products, try to find in admin products
  if (!product && !loading) {
    const adminProduct = adminProducts.find(p => p._id === id);
    if (adminProduct) {
      const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
      // Convert admin product to match the expected product format
      product = {
        id: adminProduct._id,
        name: adminProduct.name,
        category: adminProduct.category as any,
        image: `${API_BASE_URL}${adminProduct.image}`,
        shortDescription: adminProduct.shortDescription,
        fullDescription: adminProduct.fullDescription,
        features: adminProduct.features,
        usage: [],
        ingredients: [],
        safetyTips: adminProduct.careInstructions,
        price: `₹${adminProduct.price}`,
        inStock: adminProduct.inStock,
        application: adminProduct.material
      };
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <Link to="/products" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-contain bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {product.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{product.shortDescription}</p>
            </div>



            {/* Product Description & Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Info className="w-5 h-5 text-green-600 mr-2" />
                Product Description & Benefits
              </h3>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </div>
            </div>




          </motion.div>
        </div>



        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-contain bg-gray-50 dark:bg-slate-700 group-hover:scale-105 transition-transform duration-300 p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedProduct.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}