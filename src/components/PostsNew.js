import React, { Component } from "react";
import { Link } from "react-router-dom";
class PostsNew extends Component {
  render() {
    return (
      <div>
        <h3>Post New</h3>
        <Link className="btn btn-primary" to="/">
          Cancel
        </Link>
      </div>
    );
  }
}

export default PostsNew;
