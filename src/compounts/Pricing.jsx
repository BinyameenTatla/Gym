import { FaCheckCircle, FaDumbbell } from "react-icons/fa";

export const Pricing = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16" id="pricing">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Our Pricing Plans
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mt-4">
            Choose the perfect plan that suits your fitness goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-200">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Basic Plan</h3>
                <p className="text-gray-400 text-xl mb-4">$29/month</p>
                <p className="text-gray-300 mb-4">Perfect for beginners.</p>
                <ul className="text-left text-gray-300 mb-6">
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> 5 Classes a Month</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> Access to Equipment</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> 24/7 Access</li>
                </ul>
                <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300">Get Started</button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-400">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">Standard Plan</h3>
                <p className="text-gray-400 text-xl mb-4">$59/month</p>
                <p className="text-gray-300 mb-4">Perfect for intermediate fitness levels.</p>
                <ul className="text-left text-gray-300 mb-6">
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> 10 Classes a Month</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> Access to Premium Equipment</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> Personalized Workout Plans</li>
                </ul>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Get Started</button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-600">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-teal-500 mb-4">Premium Plan</h3>
                <p className="text-gray-400 text-xl mb-4">$99/month</p>
                <p className="text-gray-300 mb-4">For those who want the best results.</p>
                <ul className="text-left text-gray-300 mb-6">
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> Unlimited Classes</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> One-on-one Coaching</li>
                  <li className="flex items-center mb-2"><FaCheckCircle className="text-green-500 mr-2" /> Full Access to Facilities</li>
                </ul>
                <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300">Get Started</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
