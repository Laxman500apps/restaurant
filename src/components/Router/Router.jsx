import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import About from "../About/About.jsx";
import Body from "../Body/body.jsx";
import Contact from "../Contact/Contact.jsx";
import ErrorElement from "./ErrorElement.jsx";
import RestaurantMenu from "../Restaurantmenu/Restaurantmenu.jsx";
import Cart from "../Header/Cart.jsx";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
