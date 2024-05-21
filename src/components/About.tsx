import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="p-10 bg-blue-500 w-full min-w-screen">
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4 text-white">About DKA</h2>
          <p className="mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white p-4 flex items-center justify-center">
              <span className="text-4xl font-bold">{index + 1}</span>
              <p>Text for the {index + 1} box</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;


// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="p-10 bg-blue-500 w-full">
//       <div className="flex ">
//         <div className="w-1/2 pr-4">
//           <h2 className="text-2xl font-bold mb-4 text-white">About DKA</h2>
//           <p className="mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//           <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//         </div>
//         <div className="w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">1</span>
//             <p>Text for the first box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">2</span>
//             <p>Text for the second box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">3</span>
//             <p>Text for the third box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">4</span>
//             <p>Text for the fourth box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">5</span>
//             <p>Text for the fifth box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">6</span>
//             <p>Text for the sixth box</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
