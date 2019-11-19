import styled from 'styled-components';

export const HomePage = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`

`;

export const Title = styled.div`
    display: flex;
    align-items: baseline;

    h1 {
        margin: 0 !important;
        font-size: 50px !important;
    }
    img {
        height: 55px;
        margin-left: 14px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 6px;
`;

export const Menu = styled.div`
    margin-top: 50px;
`;

export const Form = styled.div`
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    
    *:not(:first-child) {
        margin-top: 10px !important;
    }
`;