import { FC } from "react";

const Heading: FC<{ children: string }> = ({ children }) => {
  return (
    <h1
      style={{
        fontWeight: 400,
        color: "#FF0000",
        fontSize: 18,
      }}
    >
      {children}
    </h1>
  );
};
export default Heading;
