import RestaurantCard, {
  promotedCard,
} from "../RestaurantContainer/restaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import UserContext from "../../Utils/UserContext";

const Body = () => {
  const [resData, setresData] = useState([]);
  const [filterresData, setfilterresData] = useState([]);
  const [searchRestaurantText, setsearchRestaurantText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const load = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataFetched = await load.json();
    setresData(
      dataFetched?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterresData(
      dataFetched?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterData = () => {
    const filterResData = filterresData.filter(
      (res) => res.info.avgRating > 4.2
    );
    setfilterresData(filterResData);
  };
  const setSearchText = (e) => {
    setsearchRestaurantText(e.target.value);
    const filterData = resData.filter((res) =>
      res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilterresData(filterData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline !!! Check your internet connection</h1>;
  }
  const PromotedRestaurant = promotedCard(RestaurantCard);
  return (
    <div>
      <div className="flex">
        <div className="m-2.5 border-1 border-black rounded-md">
          <input
            type="search"
            value={searchRestaurantText}
            onChange={setSearchText}
          />
        </div>
        <button
          className=" m-2.5 p-[5px] rounded-sm border-0 bg-[rgb(82,67,67)] text-white font-medium cursor-pointer hover:bg-black]"
          onClick={filterData}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          value={loggedInUser}
          className="border border-black px-1"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filterresData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
