import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ResumeContext } from "../ResumeProvider";

const FirstName = () => {
  const { name } = useContext(ResumeContext) as { name: string };
  const reference = useRef<HTMLInputElement>(null);
  const baseFontSize = 40;
  const [fontSize, setFontSize] = useState(baseFontSize);
//   const adjustFontSize = useCallback(() => {
//     if (!reference.current) return;
//     const maxWidth = 300;
//     const elementWidth = reference.current.offsetWidth;
//     if (elementWidth > maxWidth) {
//       const scale = maxWidth / elementWidth;
//       console.log(scale, Math.max(16, 20 * scale));
//       setFontSize(Math.max(12, 20 * scale));
//     } else {
//       setFontSize(baseFontSize);
//     }
//   }, [name, reference.current]);

//   useEffect(() => {
//     adjustFontSize();
//   }, [name, reference.current]);
  return (
    <span
      ref={reference}
      style={{ textTransform: "uppercase", fontSize: fontSize }}
    >
      {name}
    </span>
  );
};
export default FirstName;
