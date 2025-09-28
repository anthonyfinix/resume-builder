import styled from "styled-components";

export const Resume = styled.div<{$height:number}>`
    width: 500px;
    background: #fff;
    padding: 40px;
    height: ${props=>props.$height}
`