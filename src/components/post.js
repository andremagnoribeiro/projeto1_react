import React, { Component } from "react";
import "../post.css";

class Post extends Component {
  constructor(props) {
    super();
    this.state = {
      likes: props.post.initialLikes
    };
    this.doLike = this.doLike.bind(this);
  }

  doLike() {
    this.setState({ likes: this.state.likes + 1 });
    console.log("doLike state", this.state);
  }

  render() {
    const post = this.props.post;

    return (
      <div class={"post"}>
        <h3>{post.content}</h3>
        <small>{post.autor}</small>
        <small>{post.time}</small>

        <div style={likeLine}>
          <p>Like:{this.state.likes}</p>
          <button
            //() => --e uma função
            //onClick={() => this.setState({ likes: this.state.likes + 1 })}
            onClick={this.doLike}
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: 16,
              fontWeight: "bolder",
              borderRadius: 10,
              padding: 5
            }}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}
export default Post;
const likeLine = {
  display: "flex",
  justifyContent: "space-around",
  height: 40
};
