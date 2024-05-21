import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

interface Props {
  // Add any props you need here
}

const Footer: React.FC<Props> = () => {
  return (
    <div className="flex flex-wrap justify-between space-y-4 p-4">
      {/* First part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h1 className="text-xl font-bold">Get Connected To Us.</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed libero <br></br>sit amet justo luctus auctor.</p>
      </div>

      {/* Second part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h2 className="text-lg font-bold mb-2">Accounts</h2>
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">Login</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Sign Up</a>
        </div>
      </div>

      {/* Third part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h2 className="text-lg font-bold mb-2">Company</h2>
        <p className="text-gray-600">About</p>
        <p className="text-gray-600">Privacy </p>
        <p className="text-gray-600">Policy Terms</p>
      </div>

      {/* Fourth part */}
      <div className="w-full md:w-auto md:flex-grow">
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <div className="flex flex-col space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <span>+91 83740 68550</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>info.taycoon@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaInstagram />
            <span>Instagram</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter />
            <span>Twitter</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
