import { FC } from "react";

const Subheading: FC<{ children: string; subdued?: boolean }> = ({
  children,
  subdued,
}) => {
  return (
    <h2
      style={{
        fontWeight: 500,
        color: subdued ? "#525252" : "black",
        fontSize: 15,
      }}
    >
      {children}
    </h2>
  );
};
export default Subheading;
