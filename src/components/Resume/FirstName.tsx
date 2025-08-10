import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ResumeContext } from "../ResumeProvider";

const FirstName = () => {
  const { name } = useContext(ResumeContext) as { name: string };
  const reference = useRef<HTMLInputElement>(null);
  const [fontSize, setFontSize] = useState(40);
  const adjustFontSize = useCallback(() => {
    if (!reference.current) return;
    const { offsetWidth } = reference.current;
    const minWidth = 150;
    const maxWidth = 300;
    if (offsetWidth > maxWidth) setFontSize(fontSize - 3);
    if (offsetWidth < minWidth) setFontSize(fontSize + 3);
  }, [name, reference.current]);

  useEffect(() => {
    adjustFontSize();
  }, [name, reference.current]);
  return (
    <span
      ref={reference}
      style={{
        textTransform: "uppercase",
        fontSize,
        margin: 0,
        color: "black",
      }}
    >
      {name}
    </span>
  );
};
export default FirstName;
