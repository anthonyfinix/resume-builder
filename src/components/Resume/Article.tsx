import { FC, ReactNode } from "react";

const Article: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <article
      style={{
        marginBottom: 7,
      }}
    >
      {children}
    </article>
  );
};
export default Article;
