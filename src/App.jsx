import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import UserContext from "./Utils/UserContext.js";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore.js";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("laxman raju");
  }, []);
  return (
    <>
      <Provider store={AppStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
