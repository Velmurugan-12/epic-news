import React from "react";
import NewsCard from "./NewsCard";

function NewsBoard({ category, newsArticles }) {
  return (
    <div className="pt-5 pb-10 px-4 md:px-8 lg:px-12 min-h-[80vh] bg-gray-700">
      <div className="container mx-auto">
        {/* Category Title */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-start">
          Latest News: <span className="text-red-500 capitalize">{category}</span>
        </h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsArticles.length > 0 ? (
            newsArticles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title || "No Title Available"}
                description={article.description || "No description available."}
                imageUrl={article.image_url} 
                publishedAt={article.pubDate || "Unknown Date"} 
                readMore={article.link} 
              />
            ))
          ) : (
            
            <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh]">
              <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
              <p className="text-white mt-3">Fetching latest news...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsBoard;
