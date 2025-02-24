import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Left Section: About */}
            <div className="text-white animate__animated animate__fadeIn animate__delay-200">
              <h3 className="text-2xl font-semibold text-yellow-500">About Us</h3>
              <p className="mt-4 text-gray-400 text-sm">
                We are passionate about helping you achieve your fitness goals. Join us and take the first step toward a healthier lifestyle!
              </p>
            </div>

            {/* Center Left Section: Quick Links */}
            <div className="text-white animate__animated animate__fadeIn animate__delay-400">
              <h3 className="text-2xl font-semibold text-yellow-500">Quick Links</h3>
              <ul className="mt-4 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
                <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>

            {/* Center Right Section: Contact */}
            <div className="text-white animate__animated animate__fadeIn animate__delay-600">
              <h3 className="text-2xl font-semibold text-yellow-500">Contact</h3>
              <ul className="mt-4 text-gray-400 text-sm">
                <li>+1 (555) 123-4567</li>
                <li>contact@fitness.com</li>
                <li>123 Fitness St, Fit City, USA</li>
              </ul>
            </div>

            {/* Right Section: Social Media */}
            <div className="text-white animate__animated animate__fadeIn animate__delay-800">
              <h3 className="text-2xl font-semibold text-yellow-500">Follow Us</h3>
              <div className="flex space-x-6 mt-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
                  <FaInstagram size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
                  <FaTwitter size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-500">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 animate__animated animate__fadeIn animate__delay-1000">
            <p>&copy; 2025 Fitness Club. Created by Binyameen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
