import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/cartSlice";

const ItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const addToCart = (itemData) => {
    dispatch(addItem(itemData));
  };
  return (
    <div className="flex flex-col divide-y divide-gray-300 max-w-xl mx-auto text-left">
      {data.itemCards.map((itemData, index) => {
        const item = itemData.card.info;
        const imageUrl = `https://media-assets.swiggy.com/${item.imageId}`;

        return (
          <div
            key={item.id || index}
            className="flex justify-between py-4 w-full"
          >
            <div className="flex flex-col justify-start pr-4 flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <p className="text-gray-800 font-medium mt-2">
                ₹{(item.price || item.defaultPrice) / 100}
              </p>
            </div>

            <div className="relative w-28 h-28 flex-shrink-0">
              <img
                src={imageUrl}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => addToCart(item)}
                className="absolute cursor-pointer bottom-1 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
