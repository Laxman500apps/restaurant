import { useEffect, useState } from "react";
import { Res_Data_URL } from "./data";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    const data = await fetch(Res_Data_URL + resId);
    const info = await data.json();
    setresInfo(info);
  };
  return resInfo;
};

export default useRestaurantMenu;
