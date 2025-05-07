/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
      2,
      16
    );
  if (resInfo === null) return;
  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold font-[Roboto]  underline">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      {category.map((cat, index) => (
        <Accordian
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
