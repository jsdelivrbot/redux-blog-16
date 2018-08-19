import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  handleDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => this.props.history.push("/"));
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>titulo:</h3>
        <div>{post.title}</div>
        <h3>
          categorias:
          {post.categories}
        </h3>
        <h3>contenido:</h3>
        <div>{post.content}</div>
        <Link to="/">Back</Link>
        <button
          onClick={this.handleDelete.bind(this)}
          className="btn btn-danger pull-xs-rigth"
        >
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
