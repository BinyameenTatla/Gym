import React, { useState } from "react";

// Rename the individual card component to avoid naming conflicts
const TrainerCardItem = ({ trainer, onClick }) => (
  <div
    className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
    onClick={onClick}
  >
    <img
      src={trainer.image}
      alt={trainer.name}
      className="w-full h-60 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-center text-white p-4">
        <h3 className="text-xl font-semibold">{trainer.name}</h3>
        <p className="mt-2 text-gray-300">{trainer.specialty}</p>
      </div>
    </div>
  </div>
);

export const TrainerCard = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      name: "John Doe",
      specialty: "Fitness Expert & Coach",
      image: "tt.webp",
      description: "Specializing in strength training and endurance.",
    },
    {
      name: " Smith",
      specialty: "Muscular Bodybuilder Male",
      image: "eee.jpg",
      description: "Specializing in flexibility and mental wellness.",
    },
    {
      name: "Sam Williams",
      specialty: "Cardio & HIIT Trainer",
      image: "xx.avif",
      description: "Focused on high-intensity interval training and endurance.",
    },
    {
      name: "Alice Brown",
      specialty: "Nutritionist & Wellness Coach",
      image: "ppp.jpg",
      description: "Helping clients achieve balance through diet and lifestyle.",
    },
    {
      name: "Michael Green",
      specialty: "Strength & Conditioning Coach",
      image: "qqq.jpg",
      description: "Focusing on building strength through customized programs.",
    },
    {
      name: "Emily Clark",
      specialty: "Pilates & Flexibility Coach",
      image: "ccc.jpg",
      description: "Specializing in Pilates, flexibility, and core strength.",
    },
  ];

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer); // Open the modal with the selected trainer
  };

  const handleCloseDetails = () => {
    setSelectedTrainer(null); // Close the trainer details modal
  };

  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-12" id="trainers">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Meet Our Trainers
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mt-2">
            Learn more about the passionate professionals who will guide you to success.
          </p>
        </div>

        {/* Trainer Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCardItem
                key={index}
                trainer={trainer}
                onClick={() => handleTrainerClick(trainer)} // Pass the click handler
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trainer Detail Modal (if a trainer is selected) */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <button
              className="absolute top-0 right-0 m-4 text-gray-600"
              onClick={handleCloseDetails} // Close the modal
            >
              X
            </button>
            <h3 className="text-3xl font-semibold">{selectedTrainer.name}</h3>
            <p className="mt-2 text-lg">{selectedTrainer.specialty}</p>
            <p className="mt-4 text-gray-600">{selectedTrainer.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
