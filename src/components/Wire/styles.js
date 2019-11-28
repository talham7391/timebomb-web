import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
    from {
        opacity: 1;
    }
    
    to {
        opacity: 0.2;
    }
`;

export const Wire = styled.div`
    background-color: ${props => props.color};
    height: 100px;
    width: 100%;
    border-radius: 10px;
    
    &.pulsate {
        animation: ${pulsate} 0.2s linear infinite;
    }
`;
