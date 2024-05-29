import { ReactNode } from "react";
import "./Text.scss";
import { TextVariants } from "../../../constants";

interface TextProps {
  variant?: TextVariants;
  children?: ReactNode;
}

const Text = (props: TextProps) => {
  const { variant = TextVariants.P, children } = props;

  return <div className={`text-${variant}`}>{children}</div>;
};

export default Text;
