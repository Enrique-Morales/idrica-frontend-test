import { useEffect, useState } from "react";
import Card from "../../molecules/Card/Card";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./PostsViewer.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  selectPosts,
  fetchPosts,
  editPost,
} from "../../../redux/slice";
import { UnknownAction } from "@reduxjs/toolkit";
import { Post } from "../../../utils/types";
import EditModal from "../EditModal/EditModal";

const PostsViewer = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number>();
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post>();
  const [postToEditIndex, setPostToEditIndex] = useState<number>();
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  // remove post from list
  const removePost = (id?: number) => {
    dispatch(deletePost(id));
    setShowDeleteModal(false);
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
            post && (
              <Card
                key={index}
                post={post}
                onDelete={() => {
                  setIdToDelete(post.id);
                  setShowDeleteModal(true);
                }}
                onEdit={() => {
                  setPostToEdit(post);
                  setShowEditModal(true);
                  setPostToEditIndex(index);
                }}
              />
            )
          );
        })}
      <ConfirmationModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => removePost(idToDelete)}
        postId={idToDelete}
      />
      {postToEdit && postToEditIndex !== undefined && (
        <EditModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onConfirm={(post, index) => {
            dispatch(editPost({ post, index }));
            setShowEditModal(false);
          }}
          post={postToEdit}
          postIndex={postToEditIndex}
        />
      )}
    </div>
  );
};

export default PostsViewer;
