import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItem } from "../../Utils/cartSlice";

const Cart = () => {
  const itemsData = useSelector((state) => state?.cart?.items);
  console.log(itemsData);
  const navigate = useNavigate(); // Hook to navigate to different pages
  const dispatch = useDispatch();
  const total = itemsData.reduce((acc, item) => {
    return acc + (item.price || item.defaultPrice) / 100;
  }, 0);
  const ClearCart = () => {
    dispatch(clearCart());
  };
  const RemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {itemsData?.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-600 mt-8">
          <h2>No items in cart</h2>
          <button
            onClick={() => navigate("/")}
            className="block mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Go to Home Page
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex flex-col divide-y divide-gray-300 max-w-xl w-full text-left">
            {itemsData.map((item, index) => {
              const imageUrl = `https://media-assets.swiggy.com/${item.imageId}`;

              return (
                <div
                  key={item.id || index}
                  className="flex justify-between py-4 w-full"
                >
                  {/* Left: Item Info */}
                  <div className="flex flex-col justify-start pr-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                    <p className="text-gray-800 font-medium mt-2">
                      ₹{(item.price || item.defaultPrice) / 100}
                    </p>
                  </div>

                  {/* Right: Image and Remove Button */}
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      onClick={() => RemoveItem(item)}
                      className="absolute cursor-pointer bottom-1 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-green-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: Clear Cart and Total */}
          <div className="flex justify-between items-center max-w-xl w-full mt-6 px-2">
            <button
              onClick={ClearCart}
              className="cursor-pointer text-white bg-black rounded-md px-4 py-2 hover:bg-gray-800"
            >
              Clear Cart
            </button>
            <h1 className="text-lg font-semibold">
              <span className="mr-2">Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
