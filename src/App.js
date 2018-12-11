import React, { Component } from "react";

import Post from "./components/post.js";
import PostCreator from "./components/postCreator.js";

const postArray = [
  {
    id: 1,
    content: "Primeiro Post",
    time: "16:87",
    autor: "Baraky",
    initialLikes: 0
  },
  {
    id: 2,
    content: "Segundo Post",
    time: "12:55",
    autor: "Lemos",
    initialLikes: 1
  }
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: postArray
    };
  }
  insertPost(post) {
    const myPosts = this.state.posts;
    myPosts.push(post);
    this.setState({ posts: myPosts });
  }

  render() {
    return (
      <div>
        <h1>Minha rede social</h1>
        <PostCreator onCreate={this.insertPost.bind(this)} />
        {this.state.posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </div>
    );
  }
}

export default App;

//<Post time={"13:00"}>Texto Primeiro post</Post>
//<Post time={"14:00"}>Texto segundo post</Post>
//<Post time={"15:00"}>"Texto terceiro post"</Post>
//<Post time={"16:00"}>Texto quarto post</Post>
