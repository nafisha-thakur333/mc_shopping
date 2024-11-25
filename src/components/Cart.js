import {useSelector} from "react-redux";
import CartItemsList from "./cartItemsList";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Header from "./Header";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="mt-10 px-4"> 

        <div className="flex justify-between items-center mb-4">

          {/* Go Back to Home Button */}
          <Link to="/">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md font-bold hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out">
              Go Back to Home
            </button>
          </Link>

          {/* Clear Cart Button */}
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md font-bold hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items Container */}
        <div className="w-full max-w-4xl mx-auto mt-4 h-[400px] overflow-y-auto p-4 bg-white rounded-lg shadow-md">
          <CartItemsList items={cartItems} />

          {cartItems.length === 0 && (
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="text-2xl font-bold text-gray-600">Cart is empty! Kindly add items to the cart.</h1>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
