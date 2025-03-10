import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 py-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
       
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {currentYear} <span className="font-semibold text-white">EpicNews</span>. All rights reserved.
        </p>

        
        <ul className="flex space-x-6 mt-3 md:mt-0">
          {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 text-sm hover:text-gray-200 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </footer>
  );
};

export default Footer;
