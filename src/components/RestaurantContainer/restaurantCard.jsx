import { Image_URL } from "../../Utils/data";
const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = info;
  return (
    <div className="w-[200px] h-80 border-1 border-solid border-black m-2.5 cursor-pointer rounded-xl">
      <div>
        <img
          src={Image_URL + cloudinaryImageId}
          alt="foodItem"
          className="rounded-tr-xl rounded-tl-xl w-[100%] h-36"
        />
      </div>
      <div className="pl-1.5">
        <h3 className="text-sm font-[Roboto] font-bold">{name}</h3>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        <h4 className="text-sm">{avgRating} stars</h4>
        <h4 className="text-sm">{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const promotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white p-1 m-1 rounded-sm">
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
