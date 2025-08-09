import { FC, ReactNode } from "react";

const Figure: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <figure
      style={{
        marginBottom: 8,
      }}
    >
      {children}
    </figure>
  );
};
export default Figure;
