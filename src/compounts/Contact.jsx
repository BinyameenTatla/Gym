import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="text-center mb-12 px-4 animate__animated animate__fadeIn animate__delay-200">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Contact Us
            </h2>
            <p className="text-sm md:text-lg text-gray-400 mt-4">
              We would love to hear from you. Get in touch with us for any inquiries or questions.
            </p>
          </div>

          
          <div className="flex flex-col lg:flex-row items-center gap-12">
        
            <div className="lg:w-1/2 w-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all animate__animated animate__fadeIn animate__delay-400">
              <img
                src="boo.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

          
            <div className="lg:w-1/2 w-full bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all animate__animated animate__fadeIn animate__delay-600">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Get In Touch</h3>

        
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="text-gray-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-300">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-gray-300">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>

            
              <div className="mt-8 text-gray-400">
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="text-yellow-500 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-yellow-500 mr-3" />
                  <span>contact@fitness.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                  <span>123 Fitness St, Fit City, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

