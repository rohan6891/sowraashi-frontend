import React, { useState, useEffect } from 'react';
import { Upload, X, Edit, Trash2, Eye } from 'lucide-react';
import { products as existingProducts } from '../data/products';
import Settings from '../components/Settings';

// Define your API base URL here or import from your config
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

interface Product {
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

interface Order {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  designerName?: string;
  sareeType: string;
  material: string;
  color: string;
  design: string;
  measurements?: {
    blouseLength: number;
    blouseChest: number;
    blouseWaist: number;
    blouseShoulder: number;
    blouseSleeve: number;
    blouseNeck: number;
    sareeLength: number;
    sareeWaist: number;
    sareeHip: number;
  };
  orderPlacedDate: string;
  expectedDeliveryDate: string;
  paymentMethod: 'cash' | 'online';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'paymentSuccessful';
  amount: number;
  advanceAmount: number;
  balanceAmount: number;
  status: string;
  specialInstructions?: string;
  orderType?: string;
}

interface ProductFormData {
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string;
  price: string;
  originalPrice: string;
  discount: string;
  inStock: boolean;
  sizes: string[];
  colors: string;
  material: string;
  blouseLength: string;
  sareeLength: string;
  careInstructions: string;
  tags: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'add-products' | 'custom-designs' | 'custom-orders'>('add-products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [showProductForm, setShowProductForm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [currentQROrder, setCurrentQROrder] = useState<Order | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);

  const [productFormData, setProductFormData] = useState<ProductFormData>({
    name: '',
    category: 'silk',
    shortDescription: '',
    fullDescription: '',
    features: '',
    price: '',
    originalPrice: '',
    discount: '0',
    inStock: true,
    sizes: [],
    colors: '',
    material: '',
    blouseLength: '',
    sareeLength: '',
    careInstructions: '',
    tags: ''
  });

  const categories = [
    'silk', 'cotton', 'georgette', 'crepe', 'chiffon', 'satin', 
    'jacquard', 'embroidery', 'printed', 'bridal', 'party-wear', 'casual'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'];

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);


  useEffect(() =>{

  }, [authStatus]);

  const fetchProducts = async () => {
    try {
      // Filter existing products to only include saree products (exclude agricultural products)
      const sareeCategories = ['silk', 'cotton', 'designer', 'bridal', 'party', 'casual'];
      const filteredExistingProducts = existingProducts.filter(product => 
        sareeCategories.includes(product.category)
      );
      
      // Convert existing products to match the Product interface
      const convertedExistingProducts = filteredExistingProducts.map(product => ({
        _id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        shortDescription: product.shortDescription,
        fullDescription: product.fullDescription,
        features: product.features,
        price: parseInt(product.price.replace(/[^\d]/g, '')), // Remove currency symbols and convert to number
        originalPrice: undefined,
        discount: 0,
        inStock: product.inStock,
        sizes: ['Free Size'], // Default size for existing products
        colors: ['Multi'], // Default color for existing products
        material: product.application || 'Premium Quality',
        blouseLength: undefined,
        sareeLength: undefined,
        careInstructions: product.safetyTips,
        tags: [product.category, product.application],
        rating: 4.5, // Default rating
        reviewCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      // Try to fetch products from API
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (response.ok) {
          const data = await response.json();
          const apiProducts = data.products || [];
          // Combine existing products with API products, avoiding duplicates
          const allProducts = [...convertedExistingProducts, ...apiProducts.filter((apiProduct: Product) => 
            !convertedExistingProducts.some(existing => existing._id === apiProduct._id)
          )];
          setProducts(allProducts);
        } else {
          // If API fails, just use existing products
          setProducts(convertedExistingProducts);
        }
      } catch (apiError) {
        // If API fails, just use existing products
        console.log('API not available, using existing products only');
        setProducts(convertedExistingProducts);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setProductFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setProductFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSizeChange = (size: string) => {
    setProductFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const resetForm = () => {
    setProductFormData({
      name: '',
      category: 'silk',
      shortDescription: '',
      fullDescription: '',
      features: '',
      price: '',
      originalPrice: '',
      discount: '0',
      inStock: true,
      sizes: [],
      colors: '',
      material: '',
      blouseLength: '',
      sareeLength: '',
      careInstructions: '',
      tags: ''
    });
    setSelectedImage(null);
    setImagePreview('');
    setEditingProduct(null);
    setShowProductForm(false);
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      
      // Add all form fields
      Object.entries(productFormData).forEach(([key, value]) => {
        if (key === 'sizes') {
          formData.append(key, JSON.stringify(value));
        } else if (key === 'features' || key === 'careInstructions' || key === 'tags') {
          const arrayValue = typeof value === 'string' ? value.split(',').map(item => item.trim()).filter(item => item) : [];
          formData.append(key, JSON.stringify(arrayValue));
        } else if (key === 'colors') {
          const colorsArray = typeof value === 'string' ? value.split(',').map(item => item.trim()).filter(item => item) : [];
          formData.append(key, JSON.stringify(colorsArray));
        } else {
          formData.append(key, value.toString());
        }
      });
      
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const url = editingProduct ? `${API_BASE_URL}/api/products/${editingProduct._id}` : `${API_BASE_URL}/api/products`;
      const method = editingProduct ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const savedProduct = await response.json();
        alert(editingProduct ? 'Product updated successfully!' : 'Product added successfully!');
        
        // If adding a new product, add it to the local state immediately
        if (!editingProduct && savedProduct.product) {
          setProducts(prevProducts => [...prevProducts, savedProduct.product]);
          
          // Save to localStorage for Products page to access
          const adminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
          adminProducts.push(savedProduct.product);
          localStorage.setItem('adminProducts', JSON.stringify(adminProducts));
        }
        
        resetForm();
        fetchProducts();
      } else {
        // If API fails but we're adding a new product, create a local product entry
        if (!editingProduct) {
          const newProduct: Product = {
            _id: `local-${Date.now()}`, // Temporary ID for local products
            name: productFormData.name,
            category: productFormData.category,
            image: imagePreview || '/uploads/placeholder.png',
            shortDescription: productFormData.shortDescription,
            fullDescription: productFormData.fullDescription,
            features: productFormData.features.split(',').map(f => f.trim()).filter(f => f),
            price: parseFloat(productFormData.price),
            originalPrice: productFormData.originalPrice ? parseFloat(productFormData.originalPrice) : undefined,
            discount: parseFloat(productFormData.discount),
            inStock: productFormData.inStock,
            sizes: productFormData.sizes,
            colors: productFormData.colors.split(',').map(c => c.trim()).filter(c => c),
            material: productFormData.material,
            blouseLength: productFormData.blouseLength,
            sareeLength: productFormData.sareeLength,
            careInstructions: productFormData.careInstructions.split(',').map(c => c.trim()).filter(c => c),
            tags: productFormData.tags.split(',').map(t => t.trim()).filter(t => t),
            rating: 0,
            reviewCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          setProducts(prevProducts => [...prevProducts, newProduct]);
          
          // Save to localStorage for Products page to access
          const adminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
          adminProducts.push(newProduct);
          localStorage.setItem('adminProducts', JSON.stringify(adminProducts));
          
          alert('Product added successfully (stored locally)!');
          resetForm();
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductFormData({
      name: product.name,
      category: product.category,
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      features: product.features.join(', '),
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      discount: product.discount.toString(),
      inStock: product.inStock,
      sizes: product.sizes,
      colors: product.colors.join(', '),
      material: product.material,
      blouseLength: product.blouseLength || '',
      sareeLength: product.sareeLength || '',
      careInstructions: product.careInstructions.join(', '),
      tags: product.tags.join(', ')
    });
    setImagePreview(product.image);
    setShowProductForm(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        alert('Product deleted successfully!');
        fetchProducts();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        alert('Order status updated successfully!');
        fetchOrders();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Error updating order status');
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('Are you sure you want to delete this order?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/orders/${orderId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        alert('Order deleted successfully!');
        fetchOrders();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('Error deleting order');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          {/* Settings functionality: open modal, but no icon shown in header */}
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            title="Settings"
            style={{ display: 'none' }}
          >
            Settings
          </button>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab('add-products')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'add-products'
                ? 'bg-gray-700 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Add Products
          </button>
          <button
            onClick={() => setActiveTab('custom-designs')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'custom-designs'
                ? 'bg-gray-700 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Custom Designs ({orders.length})
          </button>

        </div>

        {/* Add Products Tab */}
        {activeTab === 'add-products' && (
          <div className="space-y-6">
            {/* Add Product Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">Product Management</h2>
              <button
                onClick={() => setShowProductForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add New Product
              </button>
            </div>

            {/* Product Form Modal */}
            {showProductForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-white">
                        {editingProduct ? 'Edit Product' : 'Add New Product'}
                      </h3>
                      <button
                        onClick={resetForm}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <form onSubmit={handleSubmitProduct} className="space-y-6">
                      {/* Image Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Product Image *
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                              required={!editingProduct}
                            />
                          </div>
                          {imagePreview && (
                            <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
                              <img
                                src={imagePreview.startsWith('http') || imagePreview.startsWith('/uploads') ? (imagePreview.startsWith('http') ? imagePreview : `${API_BASE_URL}${imagePreview}`) : imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Basic Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Product Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={productFormData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category *
                          </label>
                          <select
                            name="category"
                            value={productFormData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            {categories.map(category => (
                              <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Descriptions */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Short Description *
                        </label>
                        <input
                          type="text"
                          name="shortDescription"
                          value={productFormData.shortDescription}
                          onChange={handleInputChange}
                          required
                          maxLength={200}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Description *
                        </label>
                        <textarea
                          name="fullDescription"
                          value={productFormData.fullDescription}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Features */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Features (comma-separated)
                        </label>
                        <input
                          type="text"
                          name="features"
                          value={productFormData.features}
                          onChange={handleInputChange}
                          placeholder="e.g., Handwoven, Pure silk, Traditional design"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Pricing */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price *
                          </label>
                          <input
                            type="number"
                            name="price"
                            value={productFormData.price}
                            onChange={handleInputChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Original Price
                          </label>
                          <input
                            type="number"
                            name="originalPrice"
                            value={productFormData.originalPrice}
                            onChange={handleInputChange}
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Discount (%)
                          </label>
                          <input
                            type="number"
                            name="discount"
                            value={productFormData.discount}
                            onChange={handleInputChange}
                            min="0"
                            max="100"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Sizes */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Available Sizes
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {sizes.map(size => (
                            <label key={size} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={productFormData.sizes.includes(size)}
                                onChange={() => handleSizeChange(size)}
                                className="mr-2"
                              />
                              <span className="text-sm">{size}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Colors and Material */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Colors (comma-separated)
                          </label>
                          <input
                            type="text"
                            name="colors"
                            value={productFormData.colors}
                            onChange={handleInputChange}
                            placeholder="e.g., Red, Blue, Green"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Material *
                          </label>
                          <input
                            type="text"
                            name="material"
                            value={productFormData.material}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Measurements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blouse Length
                          </label>
                          <input
                            type="text"
                            name="blouseLength"
                            value={productFormData.blouseLength}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Saree Length
                          </label>
                          <input
                            type="text"
                            name="sareeLength"
                            value={productFormData.sareeLength}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Care Instructions and Tags */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Care Instructions (comma-separated)
                          </label>
                          <input
                            type="text"
                            name="careInstructions"
                            value={productFormData.careInstructions}
                            onChange={handleInputChange}
                            placeholder="e.g., Dry clean only, Hand wash"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags (comma-separated)
                          </label>
                          <input
                            type="text"
                            name="tags"
                            value={productFormData.tags}
                            onChange={handleInputChange}
                            placeholder="e.g., wedding, traditional, silk"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Stock Status */}
                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="inStock"
                            checked={productFormData.inStock}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span className="text-sm font-medium text-gray-700">In Stock</span>
                        </label>
                      </div>

                      {/* Submit Buttons */}
                      <div className="flex justify-end space-x-4">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? 'Saving...' : (editingProduct ? 'Update Product' : 'Add Product')}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Products List */}
            <div className="bg-gray-800 rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">All Products ({products.length})</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {products.map((product) => (
                      <tr key={product._id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
                              <img
                                src={product.image.startsWith('/uploads/') ? `${API_BASE_URL}${product.image}` : product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/48x48/10b981/ffffff?text=No+Image';
                                }}
                              />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{product.name}</div>
                              <div className="text-sm text-gray-300">{product.shortDescription}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {product.category}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {products.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-300">No products found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Custom Designs Tab */}
        {activeTab === 'custom-designs' && (
          <div className="bg-gray-800 rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-semibold text-white">Custom Design Orders</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Designer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Saree Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Delivery Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {orders.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{order.customerName}</div>
                          <div className="text-sm text-gray-300">{order.customerPhone}</div>
                          {order.customerEmail && (
                            <div className="text-sm text-gray-300">{order.customerEmail}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">
                          {order.designerName || 'Custom Order'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{order.sareeType}</div>
                          <div className="text-sm text-gray-300">{order.material} - {order.color}</div>
                          <div className="text-sm text-gray-300">{order.design}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">₹{order.amount}</div>
                        {order.advanceAmount > 0 && (
                          <div className="text-sm text-gray-300">Advance: ₹{order.advanceAmount}</div>
                        )}
                        {order.balanceAmount > 0 && (
                          <div className="text-sm text-gray-300">Balance: ₹{order.balanceAmount}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white capitalize">{order.paymentMethod}</div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.paymentStatus === 'completed' ? 'bg-green-100 text-green-800' :
                          order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {new Date(order.expectedDeliveryDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteOrder(order._id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete Order"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {orders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-300">No custom design orders found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Order Details</h3>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customer Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Customer Information</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300"><span className="font-medium text-white">Name:</span> {selectedOrder.customerName}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Phone:</span> {selectedOrder.customerPhone}</p>
                      {selectedOrder.customerEmail && (
                        <p className="text-gray-300"><span className="font-medium text-white">Email:</span> {selectedOrder.customerEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Order Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Order Information</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300"><span className="font-medium text-white">Designer:</span> {selectedOrder.designerName || 'Custom Order'}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Order Date:</span> {new Date(selectedOrder.orderPlacedDate).toLocaleDateString()}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Delivery Date:</span> {new Date(selectedOrder.expectedDeliveryDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Saree Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Saree Details</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300"><span className="font-medium text-white">Type:</span> {selectedOrder.sareeType}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Material:</span> {selectedOrder.material}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Color:</span> {selectedOrder.color}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Design:</span> {selectedOrder.design}</p>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Payment Details</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300"><span className="font-medium text-white">Method:</span> {selectedOrder.paymentMethod}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Status:</span> {selectedOrder.paymentStatus}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Total Amount:</span> ₹{selectedOrder.amount}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Advance:</span> ₹{selectedOrder.advanceAmount}</p>
                      <p className="text-gray-300"><span className="font-medium text-white">Balance:</span> ₹{selectedOrder.balanceAmount}</p>
                    </div>
                  </div>

                  {/* Measurements */}
                  {selectedOrder.measurements && (
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="text-lg font-medium text-white">Measurements (inches)</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-medium text-white mb-2">Blouse</h5>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-300">Length: {selectedOrder.measurements.blouseLength}"</p>
                            <p className="text-gray-300">Chest: {selectedOrder.measurements.blouseChest}"</p>
                            <p className="text-gray-300">Waist: {selectedOrder.measurements.blouseWaist}"</p>
                            <p className="text-gray-300">Shoulder: {selectedOrder.measurements.blouseShoulder}"</p>
                            <p className="text-gray-300">Sleeve: {selectedOrder.measurements.blouseSleeve}"</p>
                            <p className="text-gray-300">Neck: {selectedOrder.measurements.blouseNeck}"</p>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-white mb-2">Saree</h5>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-300">Length: {selectedOrder.measurements.sareeLength}"</p>
                            <p className="text-gray-300">Waist: {selectedOrder.measurements.sareeWaist}"</p>
                            <p className="text-gray-300">Hip: {selectedOrder.measurements.sareeHip}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Special Instructions */}
                  {selectedOrder.specialInstructions && (
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="text-lg font-medium text-white">Special Instructions</h4>
                      <p className="text-gray-300">{selectedOrder.specialInstructions}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}



        {/* QR Code Modal */}
        {showQRCode && currentQROrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment QR Code
                </h3>
                <button
                  onClick={() => {
                    setShowQRCode(false);
                    setCurrentQROrder(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Customer: {currentQROrder.customerName}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Amount: ₹{currentQROrder.amount}
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <img 
                    src="/qr.png" 
                    alt="Payment QR Code" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                
                <p className="text-xs text-gray-500 mb-4">
                  Scan this QR code to make payment
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // Here you would typically update the payment status in the backend
                    // For now, we'll just close the modal
                    setShowQRCode(false);
                    setCurrentQROrder(null);
                    // You can add API call here to update payment status
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                >
                  Mark as Paid
                </button>
                <button
                  onClick={() => {
                    setShowQRCode(false);
                    setCurrentQROrder(null);
                  }}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <Settings onClose={() => setShowSettings(false)} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
