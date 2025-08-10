import { FC } from "react";
import Text from "./Text";
const Subheading: FC<{ children: string; subdued?: boolean }> = ({
  children,
  subdued,
}) => {
  return (
    <Text
      style={{
        fontWeight: 500,
        color: subdued ? "#525252" : "black",
        fontSize: 13,
      }}
    >
      {children}
    </Text>
  );
};
export default Subheading;
