import React from "react";
import newsDefaultImage from "../assets/newsDefaulmage.jpg";

const NewsCard = ({ imageUrl, title, description, readMore,  }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-600 flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:scale-[1.03]">
      
      
      <div className="h-56 overflow-hidden">
        <img
          src={imageUrl || newsDefaultImage}
          alt={title || "News Image"}
          className="w-full h-full object-cover object-center transition-opacity duration-500"
        />
      </div>

      
      <div className="p-5 flex flex-col flex-grow">
        
        
        <h5 className="text-xl font-semibold mb-2 text-white line-clamp-2">
          {title ?? "No Title Available"}
        </h5>

        
        <p
          className="text-gray-300 text-sm mb-8 line-clamp-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description ? description : "No details available. Click below to read more."}
        </p>

        
        

        
        <a
          href={readMore}
          className="bg-red-500 text-white px-4 py-2 rounded-md text-sm text-center hover:bg-red-600 transition duration-300  mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
