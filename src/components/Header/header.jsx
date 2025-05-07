// import "./header.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const CartItems = useSelector((state) => state?.cart?.items);
  const toggleLogin = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between p-2.5 bg-[rgb(82,67,67)] items-center">
      <div>
        s
        <img
          className="w-[50px] rounded-[50%]"
          src="https://st2.depositphotos.com/5142301/7736/v/450/depositphotos_77365766-stock-illustration-r-letter-one-line-colorful.jpg"
          alt="logoimage"
        />
      </div>
      <div className="navbar">
        <ul className="flex">
          <li
            className="list-none py-[0px] px-[25px] text-xl
               font-medium font-[Roboto]  text-[#fff] hover:border-b-2 border-b-green-500"
          >
            Online : {onlineStatus ? "✔" : "🔴"}
          </li>
          <li>
            <Link
              to={"/"}
              className="list-none py-[0px] px-[25px] text-xl
               font-medium font-[Roboto] text-[#fff] hover:border-b-2 border-b-green-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="list-none py-[0px] px-[25px] text-xl font-medium font-[Roboto] text-[#fff] hover:border-b-2 border-b-green-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="list-none py-[0px] px-[25px] text-xl font-medium font-[Roboto] text-[#fff] hover:border-b-2 border-b-green-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              className="list-none py-[0px] px-[25px] text-xl font-medium font-[Roboto] text-[#fff] hover:border-b-2 border-b-green-500"
            >
              <span className="relative inline-block">
                Cart
                {CartItems?.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {CartItems.length}
                  </span>
                )}
              </span>
            </Link>
          </li>
          <li
            className="list-none py-[0px] px-[25px] text-xl
               font-medium font-[Roboto] text-[#fff] hover:border-b-2 border-b-green-500"
          >
            {loggedInUser}
          </li>
          <button
            className="text-xl font-bold font-[Roboto]  px-1.5 round-[5px]  text-[#fff] rounded-md hover:cursor-pointer border-2"
            onClick={toggleLogin}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
