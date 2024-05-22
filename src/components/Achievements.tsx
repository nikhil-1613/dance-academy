import React, { useState } from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    { image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', text: 'Achievement 1' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', text: 'Achievement 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', text: 'Achievement 3' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', text: 'Achievement 4' },
    { image: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', text: 'Achievement 5' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
      <div className="relative flex justify-center items-center h-[250px]">
        <div className="flex space-x-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex !== null && (
                <>
                  {hoveredIndex - 1 === index && (
                    <div className="absolute top-20 left-0 w-32 h-32 bg-cyan-500 opacity-60"></div>
                  )}
                  {hoveredIndex + 1 === index && (
                    <div className="absolute -top-20 left-0 w-32 h-32 bg-pink-500 opacity-60"></div>
                  )}
                </>
              )}
              <img
                src={achievement.image}
                alt={`Achievement ${index + 1}`}
                className={`w-32 h-32 cursor-pointer transition-transform duration-300 ${
                  hoveredIndex === index ? 'transform scale-150 z-10' : ''
                }`}
              />
              {hoveredIndex === index && (
                <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 mt-2 text-center">
                  <p>{achievement.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;

