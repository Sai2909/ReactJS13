import HocComponent from "./HocComponent";
import React from "react";

class LikesCount extends React.Component {
  render() {
    return (
      <div>
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Like👍🏻</button>
      </div>
    );
  }
}

const EnhancedLikes = HocComponent(LikesCount, 5);

export default EnhancedLikes;