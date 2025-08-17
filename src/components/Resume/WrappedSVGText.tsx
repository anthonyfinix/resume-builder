import React from "react";

interface WrappedSVGTextProps {
    text: string;
    maxWidth: number;
    x?: string;
    y?: string;
    dy?: string;
    fontSize?: string;
    fontFamily?: string;
    fill?: string;
    as?: "text" | "tspan";
}

const WrappedSVGText: React.FC<WrappedSVGTextProps> = ({
    text,
    maxWidth,
    x = "0",
    y,
    dy = "1.2em",
    fontSize = "9.5pt",
    fill = "black",
    as
}) => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let currentLine = "";
    if (typeof document !== "undefined") {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        const tempText = document.createElementNS(svgNS, "text");
        tempText.setAttribute("font-size", fontSize);
        svg.appendChild(tempText);
        document.body.appendChild(svg);

        words.forEach((word) => {
            const testLine = currentLine ? currentLine + " " + word : word;
            tempText.textContent = testLine;
            const length = tempText.getComputedTextLength();

            if (length > maxWidth && currentLine !== "") {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });

        if (currentLine) lines.push(currentLine);

        document.body.removeChild(svg);
    } else {
        // Fallback if document is unavailable (e.g. SSR)
        lines.push(text);
    }
    
    const Parent = as === "tspan" ? "tspan" : "text";

    return (
        <Parent
            x={x}
            y={y}
            fontSize={fontSize}
            fill={fill}
            dominantBaseline="hanging"
        >
            {lines.map((line, index) => (
                <tspan key={index} dominant-baseline="hanging" x={x} dy={index === 0 && y ? "0" : dy}>
                    {line}
                </tspan>
            ))}
        </Parent>
    );
};

export default WrappedSVGText;
