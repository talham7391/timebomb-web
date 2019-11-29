import styled from 'styled-components';

export const GamePage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;
    justify-content: center;
    
    > * {
        margin-left: 20px;
        margin-top: 20px;
    }
`;

export const WireContainer = styled.div`
    width: 100px;
`;

export const GameOver = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;
