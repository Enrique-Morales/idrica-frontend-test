import { useEffect, useState } from "react";
import { Post } from "../../../types";
import Card from "../../molecules/Card/Card";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./PostsViewer.scss";
import axios from "axios";
import { API_URL } from "../../../constants";

const PostsViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number>();
  const [posts, setPosts] = useState<Post[]>([]);

  // remove post from list
  const removePost = (id?: number) => {
    const newPostsList = posts.filter((post) => post.id !== id);
    setPosts(newPostsList);
    setShowModal(false);
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
    <div className="postsviewer">
      {posts.map((post, index) => {
        return (
          <Card
            key={index}
            post={post}
            onDelete={() => {
              setIdToDelete(post.id);
              setShowModal(true);
            }}
          />
        );
      })}
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => removePost(idToDelete)}
        postId={idToDelete}
      />
    </div>
  );
};

export default PostsViewer;
