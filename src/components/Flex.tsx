import React, { useEffect, useRef, useState } from "react";
import type * as CSS from "csstype";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: CSS.Property.FlexDirection;
  wrap?: CSS.Property.FlexWrap;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  gap?: CSS.Property.Gap<string | number>;

  // Margin props
  margin?: CSS.Property.Margin<string | number>;
  marginTop?: CSS.Property.MarginTop<string | number>;
  marginRight?: CSS.Property.MarginRight<string | number>;
  marginBottom?: CSS.Property.MarginBottom<string | number>;
  marginLeft?: CSS.Property.MarginLeft<string | number>;

  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  direction,
  wrap,
  justify,
  align,
  alignContent,
  gap,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parentStyles, setParentStyles] = useState<
    Partial<CSS.Properties<string | number>>
  >({});

  const toPx = (val?: string | number) =>
    typeof val === "number" ? `${val}px` : val;

  // Fetch parent styles when component mounts or when parent changes
  useEffect(() => {
    if (ref.current?.parentElement) {
      const computed = getComputedStyle(ref.current.parentElement);
      setParentStyles({
        flexDirection: computed.flexDirection as CSS.Property.FlexDirection,
        flexWrap: computed.flexWrap as CSS.Property.FlexWrap,
        justifyContent: computed.justifyContent as CSS.Property.JustifyContent,
        alignItems: computed.alignItems as CSS.Property.AlignItems,
        alignContent: computed.alignContent as CSS.Property.AlignContent,
        gap: computed.gap as CSS.Property.Gap<string | number>,
        margin: computed.margin as CSS.Property.Margin<string | number>,
        marginTop: computed.marginTop as CSS.Property.MarginTop<
          string | number
        >,
        marginRight: computed.marginRight as CSS.Property.MarginRight<
          string | number
        >,
        marginBottom: computed.marginBottom as CSS.Property.MarginBottom<
          string | number
        >,
        marginLeft: computed.marginLeft as CSS.Property.MarginLeft<
          string | number
        >,
      });
    }
  }, [ref.current?.parentElement]); // re-run if parent changes (e.g., modal mount)

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: direction ?? parentStyles.flexDirection,
        flexWrap: wrap ?? parentStyles.flexWrap,
        justifyContent: justify ?? parentStyles.justifyContent,
        alignItems: align ?? parentStyles.alignItems,
        alignContent: alignContent ?? parentStyles.alignContent,
        gap: gap !== undefined ? toPx(gap) : parentStyles.gap,
        ...(marginTop !== undefined ||
        marginRight !== undefined ||
        marginBottom !== undefined ||
        marginLeft !== undefined
          ? {
              marginTop:
                marginTop !== undefined
                  ? toPx(marginTop)
                  : parentStyles.marginTop,
              marginRight:
                marginRight !== undefined
                  ? toPx(marginRight)
                  : parentStyles.marginRight,
              marginBottom:
                marginBottom !== undefined
                  ? toPx(marginBottom)
                  : parentStyles.marginBottom,
              marginLeft:
                marginLeft !== undefined
                  ? toPx(marginLeft)
                  : parentStyles.marginLeft,
            }
          : {
              margin: margin !== undefined ? toPx(margin) : parentStyles.margin,
            }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
