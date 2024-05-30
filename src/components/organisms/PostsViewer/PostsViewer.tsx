import { useEffect, useState } from "react";
import Card from "../../molecules/Card/Card";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./PostsViewer.scss";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, selectPosts, fetchPosts } from "../../../redux/slice";
import { UnknownAction } from "@reduxjs/toolkit";

const PostsViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number>();
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  // remove post from list
  const removePost = (id?: number) => {
    dispatch(deletePost(id));
    setShowModal(false);
  };

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts() as unknown as UnknownAction);
    }
  });

  return (
    <div className="postsviewer">
      {posts &&
        posts.map((post, index) => {
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
