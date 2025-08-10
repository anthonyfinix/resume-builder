import { FC, ReactNode, CSSProperties } from "react";

interface TextProps {
  children: ReactNode;
  style?: CSSProperties; // ✅ allow inline styles
}

const Text: FC<TextProps> = ({ children, style }) => {
  return (
    <p style={{ margin: 0, fontSize: 12, color: "black", ...style }}>
      {children}
    </p>
  );
};

export default Text;
