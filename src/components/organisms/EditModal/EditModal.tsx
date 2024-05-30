import "./EditModal.scss";
import Modal from "../../molecules/Modal/Modal";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { ButtonStatus, TextVariants } from "../../../utils/constants";
import { Post } from "../../../utils/types";
import { useEffect, useState } from "react";

interface EditModalProps {
  onConfirm: (post: Post, index: number) => void;
  onClose: () => void;
  show: boolean;
  post: Post;
  postIndex: number;
}

const EditModal = (props: EditModalProps) => {
  const { onConfirm, onClose, show, post, postIndex } = props;

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // Initialize form inputs
  useEffect(() => {
    const { title, body } = post;
    setFormData({ title, body });
  }, [post]);

  const handleInputChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onClick = () => {
    onConfirm(
      {
        id: post.userId,
        userId: post.userId,
        title: formData.title,
        body: formData.body,
      },
      postIndex
    );
  };

  return (
    <Modal onClose={onClose} show={show}>
      <div data-testid="editmodal" className="edit">
        <div className="edit-body">
          <Text variant={TextVariants.H6}>Edit post {post?.id}</Text>
          <input
            className="edit-input"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <textarea
            className="edit-input"
            name="body"
            rows={4}
            placeholder="Body"
            value={formData.body}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-actions">
          <Button onClick={onClick} status={ButtonStatus.Success}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
