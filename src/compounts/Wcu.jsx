import { FaDumbbell, FaChalkboardTeacher, FaAward } from "react-icons/fa";

export const Wcu = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-800 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light">
              Discover why we stand out with quality, commitment, and results.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side: Feature Cards */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 animate__animated animate__fadeIn animate__delay-200">
                <FaDumbbell size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold">Expert Trainer</h3>
                <p className="mt-2 text-gray-400 text-center">
                  Highly qualified trainers to help you achieve your goals.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 animate__animated animate__fadeIn animate__delay-400">
                <FaChalkboardTeacher size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold">Professional Coaching</h3>
                <p className="mt-2 text-gray-400 text-center">
                  Personalized coaching plans designed for your fitness journey.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 animate__animated animate__fadeIn animate__delay-600">
                <FaAward size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold">Proven Results</h3>
                <p className="mt-2 text-gray-400 text-center">
                  We pride ourselves on delivering real results for our clients.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 animate__animated animate__fadeIn animate__delay-800">
                <FaAward size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold">50+ Certifications</h3>
                <p className="mt-2 text-gray-400 text-center">
                  Our trainers hold multiple certifications to ensure top-notch quality.
                </p>
              </div>
            </div>

            {/* Right Side: Image Section */}
            <div className="lg:w-1/2 w-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all">
              <img
                src="hh.jpg" // Replace with your image URL
                alt="Gym or Fitness"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
