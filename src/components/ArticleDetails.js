import { useParams } from "react-router-dom";
import ArticleData from "../utils/articleData";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";


const ArticleDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const articleInfo = ArticleData.filter((c) => c.Article === articleId);

  if (articleInfo.length === 0) {
    return <div className="text-center text-red-500">Article not found!</div>;
  }

  const article = articleInfo[0];


  const handleAddItem = (item) => {
    setQuantity(quantity + 1); // Increase the quantity
    //dispatch and action
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    if (quantity > 0) {
      setQuantity(quantity - 1); // Decrease the quantity
      dispatch(removeItem(item));
    }
  };


  return (
    <div>
     <Header/>
     <div className="max-w-md mx-auto p-4 bg-white shadow rounded-md mt-10">
      <h1 className="font-bold text-xl mb-4 text-center">{article.Description}</h1>
      <div className="flex flex-col items-center">
        <img
          src={article.ImagesLink}
          alt={article.Description}
          className="w-48 h-auto rounded mb-3"
        />
        <div className="text-left text-sm space-y-1">
          <p>
            <span className="font-medium">MRP Rate: </span>₹{article.MrpRate}
          </p>
          <p>
            <span className="font-medium">Wool Type: </span>{article.WoolType}
          </p>
          <p>
            <span className="font-medium">Neck Type: </span>{article.NeckType}
          </p>
        </div>

      <div className="flex justify-center items-center mt-4 space-x-4">
        {/* Remove Button */}
        <button
          className="px-4 py-2 border border-solid shadow-lg text-red-700 bg-white rounded-md font-bold cursor-pointer hover:bg-gray-200"
          onClick={() =>handleRemoveItem(article)}
        >
          -
        </button>

        {/* Quantity Display */}
        <span className="text-lg font-bold text-gray-800">{quantity == 0 ? "Add to Cart" : quantity}</span>

        {/* Add Button */}
        <button
          className="px-4 py-2 border border-solid shadow-lg text-green-700 bg-white rounded-md font-bold cursor-pointer hover:bg-gray-200"
          onClick={() => handleAddItem(article)}
        >
          +
        </button>

        {quantity > 0 && (
        <Link
            to="/cart"
            className="mt-1 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md font-bold hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            View Cart
        </Link>
        )}

      </div>
    </div>
    </div>
    </div>
  );
};

export default ArticleDetails