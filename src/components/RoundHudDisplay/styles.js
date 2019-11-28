import styled from "styled-components";

export const RoundHudDisplay = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
`;

export const DefusesFound = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        margin: 0 !important;
    }
`;

export const Wire = styled.div`
    background-color: green;
    width: 30px;
    height: 40px;
    border-radius: 6px;
    margin-right: 8px;
`;
