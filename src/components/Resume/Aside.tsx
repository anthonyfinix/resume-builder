import { FC, ReactNode } from "react";

const Aside: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <aside style={{ flex: 1 }}>{children}</aside>;
};
export default Aside;
