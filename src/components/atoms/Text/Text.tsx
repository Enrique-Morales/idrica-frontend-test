import { ReactNode } from "react";
import "./Text.scss";
import { TextVariants } from "../../../utils/constants";

interface TextProps {
  variant?: TextVariants;
  children?: ReactNode;
}

const Text = (props: TextProps) => {
  const { variant = TextVariants.P, children } = props;

  return (
    <div data-testid="text" className={`text-${variant}`}>
      {children}
    </div>
  );
};

export default Text;
