// SvgText.tsx
import { FC, JSX, useRef } from "react";
import { BaseSVGTextProps } from "../../types";
import useCoordinate from "./useCoordinates";

const VARIANT_STYLES: Record<
    NonNullable<BaseSVGTextProps["variant"]>,
    React.CSSProperties
> = {
    heading: {
        fontSize: "11pt",
        fill: "#FF0000",
    },
    subheading: {
        fontSize: "9.5pt",
        fill: "#000000",
    },
    body: {
        fontSize: "9.5pt",
        fontWeight: 400,
        fill: "#000000",
    },
    caption: {
        fontSize: "8pt",
        fontWeight: 300,
        fill: "gray",
    },
};

const SvgText: FC<BaseSVGTextProps> = ({
    text,
    x,
    y,
    dy,
    fontSize,
    fontFamily = "Inter, sans-serif",
    fill,
    dominantBaseline = "hanging",
    as = "text",
    variant = "body",
}) => {
    const ref = useRef(null);
    const Tag = as;

    // merge variant defaults with overrides
    const style: React.CSSProperties = {
        ...VARIANT_STYLES[variant],
        fontFamily,
        fontSize: fontSize || VARIANT_STYLES[variant].fontSize,
        fill: fill || VARIANT_STYLES[variant].fill,
    };

    return (
        <Tag
            ref={ref}
            x={x}
            y={y}
            dy={dy}
            dominantBaseline={dominantBaseline}
            style={style}
        >
            {text}
        </Tag>
    );
};

export default SvgText;
