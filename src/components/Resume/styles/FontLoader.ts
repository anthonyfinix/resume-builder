import { createGlobalStyle } from "styled-components";

export const FontLoader = createGlobalStyle<{ font: string }>`
  @import url('https://fonts.googleapis.com/css2?family=${props => props.font.replace(/\s+/g, '+')}:wght@400;700&display=swap');
`;