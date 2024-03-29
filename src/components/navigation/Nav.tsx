import React from 'react';
import styled from "styled-components";
import {Icon} from "../icons/Icon";


export const Nav = () => {
    return (
        <Navigation>
            <a href="#"><IconWrapper><Icon iconId="Contrast"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="Home"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="file-code"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="cv"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="Portfolio"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="Blog"/></IconWrapper></a>
            <a href="#"><IconWrapper><Icon height="18" width="16.5" iconId="Contact"/></IconWrapper></a>
        </Navigation>
    );
};

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 6rem;
    background-color: #fff;
    margin: 0 auto;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 7rem;
    
    & > a:first-child {
        margin-bottom: 5rem;
    }
    transition: width 0.5s ease, height 0.5s ease;
    @media (max-width: 1150px) {
        width: calc(2rem + 4 * ((100vw - 600px) / (1150 - 600)));
        
    }
    }
    
   
`

export const IconWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: #F0F0F6;
    :hover {
        background-color: #FFB400;
    }
`;
