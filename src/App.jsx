import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false); 

  const apiKey ="cd1afb985a0441b59e65cd75351459c3";

  useEffect(() => {
    setLoading(true);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const existedArticles = data.articles.filter(
          (item) => item.content !== "[Removed]"
        );
        setNewsArticles(existedArticles);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });

  }, [category]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setCategory={setCategory} />
    
      
      <div className="flex-grow">
        <NewsBoard category={category} newsArticles={newsArticles} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;