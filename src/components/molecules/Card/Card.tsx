import { ReactElement, ReactNode } from "react";
import "./Card.scss";
import { Post } from "../../../utils/types";
import Text from "../../atoms/Text/Text";
import { TextVariants } from "../../../utils/constants";
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import EditButton from "../../atoms/EditButton/EditButton";

interface CardProps {
  post: Post;
  children?: ReactNode;
  onDelete: () => void;
  onEdit: () => void;
}

// capitalise the first letter and wrap each new \n line in a div
export const parseBody = (body: string): ReactElement[] => {
  const capitalisedBody = body.charAt(0).toUpperCase() + body.slice(1);
  return capitalisedBody
    .split("\n")
    .map((line, index) => <div key={index}>{line}</div>);
};

const Card = (props: CardProps) => {
  const { post, onDelete, onEdit } = props;
  const { title, body, userId } = post;

  return (
    <div className="card">
      <div>
        <div className="card-top">
          <Text variant={TextVariants.H6}>{title}</Text>
          <Text variant={TextVariants.SmallP}>By user {userId}</Text>
        </div>
        <Text variant={TextVariants.P}>{parseBody(body)}</Text>
      </div>
      <div className="card-actions">
        <DeleteButton onClick={onDelete} />
        <EditButton onClick={onEdit} />
      </div>
    </div>
  );
};

export default Card;
