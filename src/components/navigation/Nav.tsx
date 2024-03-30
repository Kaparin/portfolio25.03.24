import React from 'react';
import styled from "styled-components";
import {Icon} from "../icons/Icon";
import { IconWrapper } from '../IconWrapper';


export const Nav = () => {
    return (
        <Navigation>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon  iconId="Contrast" width="55" height="55"/></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="Home"/></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="file-code"/></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="cv" /></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="Portfolio"/></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="Blog"/></IconWrapper></a>
            <a href="#"><IconWrapper hoverColor="#FFB400" color="#F0F0F6" radius="50%"><Icon fill="#767676" height="22" width="22" iconId="Contact"/></IconWrapper></a>
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

    transition: 
    width 0.5s, 
    background-color 1.5s,
    transform 1s;
            //width 0.5s ease, height 0.5s ease;
    @media (max-width: 1150px) {
        width: calc(0.5em + 4 * ((100vw - 600px) / (1150 - 600)));
        margin-right: 1rem;
        background-color: #E4E6EB;
       
        //height: 47%;

    }
}`