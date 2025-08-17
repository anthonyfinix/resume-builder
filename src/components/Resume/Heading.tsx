import { FC } from "react";
import { BaseSVGTextProps } from "../../types";

const Heading: FC<BaseSVGTextProps> = ({
  text,
  x,
  y,
  fill = "#FF0000",
  dominantBaseline = "hanging"
}) => {
  return (
    <text
      x={x}
      y={y}
      dominantBaseline={dominantBaseline}
      fill={fill}
      style={{
        fontWeight: 400,
        fontSize: 14,
      }}
    >
      {text}
    </text>
  );
};

export default Heading;
