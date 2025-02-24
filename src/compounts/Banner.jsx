import { FaBaseball } from "react-icons/fa6";
import { PiMemberOfFill } from "react-icons/pi";
import { FaAccusoft } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";

export const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        {/* Left Section - Text Overlay */}
        <div
          className="relative z-10 flex flex-col justify-center items-center lg:items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent to-black opacity-80 h-full w-full lg:w-1/2"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s text-center lg:text-left"
          >
            Elevate your <span className="text-yellow-500">Workout</span>
          </h1>
          <p className="text-lg lg:text-xl opacity-80 mb-8 text-center lg:text-left animate__animated animate__fadeIn animate__delay-2s">
            Unleash your full potential with the best training programs, expert trainers, and premium gym facilities.
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500"
          >
            Get Started
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full lg:w-1/2 h-full">
          <img
            src="/oo.jpg"  // Ensure the image is in the public folder
            alt="Workout"
            className="w-full h-full object-cover object-center" // Ensure the image covers the right side area
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-4 animate__animated animate__fadeInUp animate__delay-200">
              <FaBaseball size={40} className="text-yellow-500 transition-transform duration-300 transform hover:scale-125" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">5+ Year Services</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-4 animate__animated animate__fadeInUp animate__delay-400">
              <FaCertificate size={40} className="text-yellow-500 transition-transform duration-300 transform hover:scale-125" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">50+ Certified Trainers</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-4 animate__animated animate__fadeInUp animate__delay-600">
              <PiMemberOfFill size={40} className="text-yellow-500 transition-transform duration-300 transform hover:scale-125" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">1000+ Happy Members</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center gap-4 animate__animated animate__fadeInUp animate__delay-800">
              <FaAccusoft size={40} className="text-yellow-500 transition-transform duration-300 transform hover:scale-125" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">95% Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Text Animation */}
      <div className="relative">
        <div className="text-center text-white py-6">
          <p className="text-xl animate__animated animate__fadeInUp animate__infinite animate__delay-1s">
            <span className="text-yellow-500">Evaluating your</span> <span className="text-yellow-500">Workout Progress...</span>
          </p>
        </div>
      </div>
    </>
  );
};
