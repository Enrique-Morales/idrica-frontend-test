import { ReactNode } from "react";
import "./Button.scss";
import { ButtonStatus } from "../../../constants";

interface ButtonProps {
  status?: ButtonStatus;
  children?: ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { status = ButtonStatus.Neutral, onClick, children } = props;

  return (
    <button className={`button button-${status}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
