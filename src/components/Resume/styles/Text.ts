import styled from "styled-components";

interface TextProps {
    fontSize?: string;
    margin?: string | number;
    marginBottom?: string | number;
    marginTop?: string | number;
}

export const Text = styled.h1<TextProps>`
    font-size: ${props => props.fontSize || '1em'};
    margin: ${props => typeof props.margin === 'number' 
        ? `${props.margin}em` 
        : props.margin || '0'};

    margin-top: ${props => typeof props.marginTop === 'number' 
        ? `${props.marginTop}em` 
        : props.marginTop || 'inherit'};

    margin-bottom: ${props => typeof props.marginBottom === 'number' 
        ? `${props.marginBottom}em` 
        : props.marginBottom || 'inherit'};
`