@echo off
echo Installing dependencies for SOWRAASHI Boutique...
echo.

echo Installing frontend dependencies...
npm install

echo.
echo Installing backend dependencies...
cd server
npm install

echo.
echo Dependencies installed successfully!
echo.
echo To start the application:
echo 1. Start MongoDB
echo 2. Run: npm run server (in server directory)
echo 3. Run: npm run dev (in root directory)
echo.
pause

