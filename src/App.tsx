import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import { Post } from "./types";
import { API_URL } from "./constants";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // remove post from list
  const removePost = (id: number) => {
    const newPostsList = posts.filter((post) => post.id !== id);
    setPosts(newPostsList);
  };

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
            <div className="post-top">
              <div>
                <div className="post-title">{title}</div>
                <div className="post-author">By user {userId}</div>
              </div>
              <button className="delete-button" onClick={() => removePost(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
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
