import { FC, ReactNode, CSSProperties } from "react";

interface TextProps {
  children: ReactNode;
  style?: CSSProperties; // ✅ allow inline styles
}

const Text: FC<TextProps> = ({ children, style }) => {
  return <p style={{ margin: 0, ...style }}>{children}</p>; // ✅ merge defaults with custom styles
};

export default Text;
