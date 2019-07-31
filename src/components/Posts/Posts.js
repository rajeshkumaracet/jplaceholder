import React, { Component } from "react";
import "./Posts.scss";
import { Link } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Posts extends Component {
  render() {
    const iCard = this.props.posts.map(post => (
      <div className="card" key={post.id}>
        <div className="card-body">
          <h5 className="card-title">{post.title.toUpperCase()}</h5>
          <p className="lead">{post.body.substr(0, 200)}...</p>
          <Link to={`/topics/${post.title}`} className="btn btn-warning">
            <i className="fas fa-angle-double-right" /> Read More
          </Link>
        </div>
      </div>
    ));
    return <div>{iCard}</div>;
  }
}

export default Posts;
