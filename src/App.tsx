import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import { Post } from "./types";
import { API_URL } from "./constants";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const isLoaded = posts.length > 0;
    if (!isLoaded) {
      axios
        .get<Post[]>(API_URL)
        .then(function (response) {
          // handle success
          setPosts(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  });
  return (
    <div className="app">
      {posts.map((post, index) => {
        const { id, title, userId, body } = post;
        return (
          <div className="post" key={index}>
            <div className="post-title">{title}</div>
            <div className="post-author">By user {userId}</div>
            <div className="post-body">{parseBody(body)}</div>
          </div>
        );
      })}
    </div>
  );
};

// capitalise the first letter and wrap each new \n line in a div
const parseBody = (body: string): ReactElement[] => {
  const capitalisedBody = body.charAt(0).toUpperCase() + body.slice(1);
  return capitalisedBody
    .split("\n")
    .map((line, index) => <div key={index}>{line}</div>);
};

export default App;
