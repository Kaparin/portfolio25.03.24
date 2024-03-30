import styled from "styled-components";


export const ContainerDescription = styled.div`
    max-width: 28rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    h2 {
        color: #2B2B2B;
        font-family: Inter, serif;
        font-style: normal;
        font-weight: 700;
        line-height: 3.7rem;
        font-size: 2rem;
        text-transform: capitalize;
        @media (max-width: 431px) {
            font-size: 1.3rem;
        }
        @media (max-width: 889px) {
            line-height: 2.7rem;
            font-size: 1.5rem;
        }
    }
    p {
        font-size: 1rem;
        color: #767676;
        font-weight: 400;
        line-height: 1.5rem;
        text-transform: capitalize;
            }
    }
`


