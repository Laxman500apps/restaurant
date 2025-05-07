import React from "react";
import UserContext from "../../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>count : {count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          +
        </button>
        <h3>
          <UserContext.Consumer>
            {({ loggedInUser }) => <span>{loggedInUser}</span>}
          </UserContext.Consumer>
        </h3>
        <h3>location</h3>
        <h3>contact</h3>
      </div>
    );
  }
}

export default UserClass;
