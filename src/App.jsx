import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("top"); 
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "pub_738480ed7d43b75a282beca88f0e961ca3037"; 

  useEffect(() => {
    setLoading(true);
    setError(null);

    let apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&category=${category}`;


    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const validArticles = data.results || []; 
        setNewsArticles(validArticles);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load news. Please try again.");
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setCategory={setCategory} />

      <div className="flex-grow">
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && <NewsBoard category={category} newsArticles={newsArticles} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
