import styled from 'styled-components';

interface DocumentProps {
  fontFamily?: string;
  baseFontSize?: string | number;
  padding?: string;
  bg?: string;
}

export const Document = styled.div<DocumentProps>`
  /* Use the prop if provided, otherwise fallback to your original defaults */
  font-family: ${props => props.fontFamily || 'Arial, sans-serif'};
  font-size: ${props => typeof props.baseFontSize === 'number' 
    ? `${props.baseFontSize}px` 
    : props.baseFontSize || '16px'};
  background: ${props => props.bg || '#fff'};
  padding: ${props => props.padding || '40px'};

  /* Fixed A4 Dimensions */
  width: 210mm;
  height: 297mm;
  flex-shrink: 0;
  box-sizing: border-box; /* Ensures padding doesn't push width past 210mm */
  
  /* Standard Print Optimization */
  @media print {
    margin: 0;
    box-shadow: none;
  }
`;