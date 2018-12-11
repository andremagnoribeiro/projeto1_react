import React, { Component } from "react";

class PostCreator extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  createPost() {
    const newPost = {
      content: this.state.text,
      autor: "Andre",
      initialLikes: 0,
      time: new Date().getTime()
    };
    this.props.onCreate(newPost);
  }

  insertPost(post) {
    const myPosts = this.state.posts;
    myPosts.push(post);
    this.setState({ posts: myPosts });
  }
  render() {
    return (
      <div>
        <h3>Novo Post</h3>
        <input
          onChange={event => {
            const value = event.target.value;
            this.setState({ text: value });
          }}
          value={this.state.text}
          style={{ width: "100%" }}
        />
        <button onClick={() => this.createPost()}>Postar</button>
      </div>
    );
  }
}

export default PostCreator;
