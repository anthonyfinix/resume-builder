import { FC, ReactNode } from "react";

const Figure: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <figure
      style={{
        marginBottom: 5,
        marginLeft: 0,
        marginTop: 0
      }}
    >
      {children}
    </figure>
  );
};
export default Figure;
