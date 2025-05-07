import { useContext } from "react";
import UserContext from "../../Utils/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h2>Name: {loggedInUser}</h2>
      <h2>Location: Hyderabad</h2>
      <h2>Contact: LaxmanRaju@gmail.com</h2>
    </div>
  );
};

export default User;
