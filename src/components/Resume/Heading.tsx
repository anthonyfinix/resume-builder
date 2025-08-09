import { FC } from "react";
import Text from "./Text";

const Heading: FC<{ children: string }> = ({ children }) => {
  return (
    <Text
      style={{
        fontWeight: 400,
        color: "#FF0000",
        fontSize: 18,
      }}
    >
      {children}
    </Text>
  );
};
export default Heading;
