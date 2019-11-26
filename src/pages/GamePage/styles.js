import styled from 'styled-components';

export const GamePage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    > * {
        margin-left: 20px;
        
        &:first-child {
            margin-left: 0px;
        }
    }
`;

export const WireContainer = styled.div`
    width: 100px;
`;
