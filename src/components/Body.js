import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard"; 
import articleData from "../utils/articleData";
import Header from "./Header";
import { XIcon, SearchIcon } from '@heroicons/react/solid'; // Import Heroicons X Icon

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm(""); // Clear search term when cross is clicked
  };

  const filteredArticles = articleData.filter((product) => 
    product.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.Article.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100">
      <Header />
      
       {/* Search Box */}
       <div className="max-w-screen-xl mx-auto my-4 px-4 flex justify-center">
        <div className="relative w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4">
          {/* Search Icon on the Left */}
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <SearchIcon className="w-5 h-5" />
          </div>

          <input 
            type="text" 
            placeholder="Search Articles" 
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          {/* Cross Icon to Clear Search */}
          {searchTerm && (
            <button 
              onClick={clearSearch} 
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid Layout for Articles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1 px-4 py-4 m-auto w-full max-w-screen-xl">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(products => (
            <Link to={`/articles/${products.Article}`} key={products.Article}>
              <ArticleCard className="w-full h-full" productData={products} />
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-xl font-semibold text-gray-500">
            No articles found
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
