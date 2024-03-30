import styled from "styled-components";
export const MainContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1020px;
    gap: 2rem;
    margin: 0 auto;
    transition: width 1s ease, height 0.5s ease;
    @media (max-width: 1199px) {
        margin: 0  3rem;
    }
`


