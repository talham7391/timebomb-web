import styled from "styled-components";

export const InfoDisplay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
`;

export const InfoButton = styled.div`
    padding: 12px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d0d0d0;
    cursor: pointer;

    img {
        height: 40px;
    }
`;

export const WarningContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
`;

export const RoleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3 {
        margin: 0 !important;
    }
    
    h3:first-child {
        margin-right: 10px !important;
    }
    
    h3:nth-child(2) {
        color: ${props => props.roleColor};
    }
`;
