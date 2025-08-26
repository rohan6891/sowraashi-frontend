# SOWRAASHI - Designer's Boutique & Sarees Collection

A modern web application for SOWRAASHI, a boutique specializing in designer sarees and custom designs. Built with React, TypeScript, and MongoDB.

## Features

### Customer Features
- Browse saree collections by category
- View detailed product information
- Contact information and location details
- WhatsApp integration for inquiries

### Admin Features
- Add new saree products with images
- Manage product inventory
- View order statistics and customer data
- Upload product images and descriptions

### Designer Features
- Create custom saree orders
- Take customer measurements
- Track order progress
- Manage payment information
- Handle UPI payments with proof upload

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- Multer for file uploads
- bcryptjs for password hashing

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sowraashi-boutique
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/sowraashi-boutique
   JWT_SECRET=your-secret-key-here
   PORT=5000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or update the MONGODB_URI in the .env file.

5. **Start the backend server**
   ```bash
   npm run server
   ```

6. **Start the frontend development server**
   ```bash
   npm run dev
   ```

## Default Login Credentials

### Admin Access
- Username: `admin`
- Password: `admin123`
- Features: Add products, view all orders, manage inventory

### Designer Access
- Username: `dis`
- Password: `dis123`
- Features: Create orders, manage customer measurements, track progress

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order (designer only)
- `GET /api/orders/:id` - Get single order
- `PATCH /api/orders/:id/status` - Update order status
- `PATCH /api/orders/:id/payment` - Update payment status

## Project Structure

```
sowraashi-boutique/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   └── assets/            # Static assets
├── server/                 # Backend source code
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js           # Server entry point
├── public/                 # Public assets
│   └── uploads/           # Uploaded images
└── package.json            # Dependencies and scripts
```

## Key Features Implementation

### Custom Saree Orders
- Comprehensive measurement tracking (blouse and saree dimensions)
- Payment method selection (cash/online)
- UPI payment proof upload
- Order progress tracking
- Delivery date management

### Product Management
- Image upload with validation
- Category-based organization
- Detailed product descriptions
- Price and inventory management
- Material and size specifications

### User Authentication
- Role-based access control
- Secure password hashing
- JWT token management
- Session persistence

## Deployment

### Frontend
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Backend
```bash
npm run server
```
The server will start on the specified PORT (default: 5000).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for SOWRAASHI boutique.

## Support

For support or questions, please contact:
- Email: info@sowraashi.com
- Phone: +91 9740925835
- Address: First floor, Manjunath arcade, No -21/38, main road, opposite Medplus, Bengaluru, 560064, KA, IN

## Future Enhancements

- Customer portal for order tracking
- Online payment gateway integration
- Inventory management system
- Customer feedback and reviews
- Mobile app development
- Analytics dashboard
- Email notifications
- SMS integration

