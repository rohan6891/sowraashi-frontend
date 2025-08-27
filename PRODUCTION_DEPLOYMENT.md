# Production Deployment Guide

## Security Features Implemented

### 🔐 Authentication & Authorization
- **Protected Routes**: Admin and Designer dashboards are secured with role-based authentication
- **JWT Token Verification**: All sensitive routes require valid JWT tokens
- **Secure Credentials**: Production uses environment-based secure passwords
- **Session Management**: Automatic token validation and logout on expiry

### 🛡️ Security Middleware
- **Helmet**: Security headers for XSS, CSRF, and other attacks
- **Rate Limiting**: Prevents brute force attacks (100 requests per 15 minutes)
- **CORS Protection**: Configured for production domain
- **File Upload Security**: Sanitized filenames and type validation
- **Input Validation**: Secure file size limits and type restrictions

### 🚀 Production Configuration

#### Environment Setup
1. Copy `.env.production` and update with your values:
   ```bash
   cp .env.production .env
   ```

2. **CRITICAL**: Update these values in `.env`:
   ```env
   JWT_SECRET=your-super-secure-jwt-secret-key-change-this-in-production
   ADMIN_PASSWORD=YourSecureAdminPassword123!
   DESIGNER_PASSWORD=YourSecureDesignerPassword123!
   CORS_ORIGIN=https://yourdomain.com
   MONGODB_URI=mongodb://localhost:27017/sowraashi-boutique-prod
   ```

#### Installation & Build
```bash
# Install dependencies
npm install

# Install production dependencies only (for deployment)
npm run install:prod

# Build for production
npm run build:prod

# Start production server
npm start
```

#### Default Credentials (CHANGE IMMEDIATELY)
- **Admin**: Username: `admin`, Password: Set in environment
- **Designer**: Username: `designer`, Password: Set in environment

### 📁 Files Removed for Security
- `src/data/products_updated.ts` - Contained irrelevant agricultural products
- `src/pages/Feedbacks.tsx` - Unused page that wasn't in routing

### 🔒 Security Best Practices Implemented

1. **Password Security**:
   - Environment-based secure passwords
   - BCrypt hashing with configurable rounds
   - No hardcoded credentials in code

2. **API Security**:
   - Rate limiting on all endpoints
   - Helmet security headers
   - CORS restrictions
   - Input sanitization

3. **File Upload Security**:
   - File type validation
   - Size limits (5MB default)
   - Filename sanitization
   - Secure upload directory

4. **Error Handling**:
   - No sensitive information leaked in production errors
   - Proper 404 handling
   - Structured error responses

### 🚦 Testing Checklist

- [ ] Admin dashboard requires authentication
- [ ] Designer dashboard requires authentication
- [ ] Unauthorized access redirects to login
- [ ] File uploads work with size/type restrictions
- [ ] Rate limiting prevents spam requests
- [ ] CORS blocks unauthorized domains
- [ ] Environment variables are loaded correctly
- [ ] Database connection is secure
- [ ] JWT tokens expire correctly
- [ ] Logout clears authentication

### 🌐 Deployment Steps

1. **Server Setup**:
   ```bash
   # Clone repository
   git clone <your-repo>
   cd project
   
   # Install dependencies
   npm run install:prod
   
   # Set up environment
   cp .env.production .env
   # Edit .env with your secure values
   
   # Build application
   npm run build:prod
   
   # Start production server
   npm start
   ```

2. **Database Setup**:
   - Ensure MongoDB is running
   - Database will be created automatically
   - Admin and Designer users will be created on first run

3. **Reverse Proxy (Recommended)**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:5001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

### 🔧 Monitoring & Maintenance

- Monitor server logs for security events
- Regularly update dependencies
- Backup database regularly
- Monitor rate limiting logs
- Review and rotate JWT secrets periodically

### 🆘 Troubleshooting

**Authentication Issues**:
- Check JWT_SECRET is set correctly
- Verify user credentials in database
- Check token expiration settings

**CORS Issues**:
- Update CORS_ORIGIN in environment
- Verify domain matches exactly

**File Upload Issues**:
- Check upload directory permissions
- Verify file size limits
- Check allowed file types

---

**⚠️ SECURITY WARNING**: Always change default passwords and JWT secrets before deploying to production!