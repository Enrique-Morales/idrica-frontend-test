import "./ConfirmationModal.scss";
import Modal from "../../molecules/Modal/Modal";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { ButtonStatus } from "../../../utils/constants";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onClose: () => void;
  show: boolean;
  postId?: number;
}

const ConfirmationModal = (props: ConfirmationModalProps) => {
  const { onConfirm, onClose, show, postId } = props;

  return (
    <Modal onClose={onClose} show={show}>
      <div data-testid="confirmationmodal" className="confirmation">
        <div className="confirmation-body">
          <Text>Are you sure you want to delete post with id {postId}?</Text>
        </div>
        <div className="confirmation-actions">
          <Button onClick={onConfirm} status={ButtonStatus.Danger}>
            Delete
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
