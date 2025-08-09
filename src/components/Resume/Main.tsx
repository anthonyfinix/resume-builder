import { FC, ReactNode } from "react";

const Main: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <main style={{ flex: 2 }}>{children}</main>;
};
export default Main;
