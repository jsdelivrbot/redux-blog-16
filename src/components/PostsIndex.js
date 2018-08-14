import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
          <Link className="btn" to={`/posts/${post.id}`}>
            Mas Info
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Post Index</h3>
        <Link to="/posts/new" className="btn">
          Agregar un Post
        </Link>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
