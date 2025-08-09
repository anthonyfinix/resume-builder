import { FC, ReactNode } from "react";

const Article: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <article
      style={{
        marginBottom: 10,
      }}
    >
      {children}
    </article>
  );
};
export default Article;
