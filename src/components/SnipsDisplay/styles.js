import styled from "styled-components";

export const SnipsDisplay = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3787ff;
    color: white;
    transition: opacity 0.3s;
    padding: 10px;
    
    &.show {
        opacity: 1;
    }
    
    p {
        font-size: 18px;
    }
    
    img {
        height: 30px;
        margin-right: 10px;
    }
`;
