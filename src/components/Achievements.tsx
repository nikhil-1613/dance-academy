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
    <div className="flex justify-center items-center h-[250px] border border-red-700">
      <div className="flex space-x-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={achievement.image}
              alt={`Achievement ${index + 1}`}
              className={`w-32 h-32 cursor-pointer transition-transform duration-300 ${
                hoveredIndex === index ? 'transform scale-150' : ''
              }`}
            />
            {hoveredIndex === index && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center p-2">
                <p>{achievement.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;


// import React, { useState } from 'react';

// const Achievements: React.FC = () => {
//   const achievements = [
//     { image: 'https://via.placeholder.com/150', text: 'Achievement 1' },
//     { image: 'https://via.placeholder.com/150', text: 'Achievement 2' },
//     { image: 'https://via.placeholder.com/150', text: 'Achievement 3' },
//     { image: 'https://via.placeholder.com/150', text: 'Achievement 4' },
//     { image: 'https://via.placeholder.com/150', text: 'Achievement 5' },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="flex justify-center items-center h-[300px] border border-red-700">
//       <div className="flex space-x-4">
//         {achievements.map((achievement, index) => (
//           <div
//             key={index}
//             className="relative"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <img
//               src={achievement.image}
//               alt={`Achievement ${index + 1}`}
//               className="w-32 h-32 cursor-pointer"
//             />
//             {hoveredIndex === index && (
//               <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
//                 <p className="text-center">{achievement.text}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Achievements;
