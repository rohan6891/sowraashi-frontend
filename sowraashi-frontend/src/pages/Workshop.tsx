import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Workshop() {
  const workshopAddress = "first floor, Manjunath arcade, No -21/38, main road, opposite Medplus, Bengaluru, 560064, Karnataka, INDIA";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshopAddress)}`;
  const phoneNumber = "+91 9740925835";
  const email = "info@sareecompany.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-black dark:via-gray-900 dark:to-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Custom Designer Workshop
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visit our workshop for personalized measurements and custom saree designs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 dark:border-gray-700"
        >
          {/* Workshop Location Info */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-pink-600 mr-3" />
              Visit Our Workshop
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              For custom saree designs, please visit our workshop for personalized measurements and design consultation.
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <MapPin className="w-5 h-5 text-pink-600 mr-2" />
              Workshop Address
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              {workshopAddress}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Phone className="w-4 h-4 text-pink-600 mr-2" />
                Phone Number
              </h4>
              <a href={`tel:${phoneNumber}`} className="text-pink-600 hover:text-pink-700 font-medium">
                {phoneNumber}
              </a>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Mail className="w-4 h-4 text-purple-600 mr-2" />
                Email
              </h4>
              <a href={`mailto:${email}`} className="text-purple-600 hover:text-purple-700 font-medium">
                {email}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <Clock className="w-5 h-5 text-purple-600 mr-2" />
              Working Hours
            </h3>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><span className="font-medium">Monday - Saturday:</span> 10:00 AM - 7:00 PM</p>
              <p><span className="font-medium">Sunday:</span> 11:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl mr-4 mb-4"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What to Expect at Our Workshop
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Consultation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Discuss your design ideas and preferences with our expert designers
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Measurements</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Get precise measurements taken for a perfect fit
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Design Finalization</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Finalize your custom design and discuss timeline & pricing
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}