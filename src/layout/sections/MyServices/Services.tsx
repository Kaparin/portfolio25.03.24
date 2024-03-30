import React from 'react';

import {ContainerDescription} from "../../../components/ContainerDescription";
import styled from "styled-components";
import {Icon} from '../../../components/icons/Icon';

export const Services = () => {
    return (
        <>
            <ContainerDescription>
                <h2>my services</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <ServicesContainer>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="Advertising" width="74px" height="74px"/>
                            <h3>advertising</h3>
                            <p>dolor sit amet</p></FrontSide>
                        <BackSide>
                            <h3>advertising</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="Microphone" width="74px" height="74px"/>
                            <h3>sound design</h3>
                            <p>Voice Over, Beat Making</p></FrontSide>
                        <BackSide>
                            <h3>sound design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="Photographer" width="74px" height="74px"/>
                            <h3>photography</h3>
                            <p>portrait, product photography</p></FrontSide>
                        <BackSide>
                            <h3>photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="coding" width="74px" height="74px"/>
                            <h3>web development</h3>
                            <p>blog, e-commerce4</p></FrontSide>
                        <BackSide>
                            <h3>web development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="game-development" width="74px" height="74px"/>
                            <h3>game design</h3>
                            <p>Character Design, Props & Objects</p></FrontSide>
                        <BackSide>
                            <h3>game design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
                <ServiceCard>
                    <CardInner>
                        <FrontSide><Icon iconId="illustration" width="74px" height="74px"/>
                            <h3>uI/uX design</h3>
                            <p>Mobile app, website design</p></FrontSide>
                        <BackSide>
                            <h3>uI/uX design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCard>
            </ServicesContainer>
        </>
    )
};

export const CardButton = styled.a `
    color: #FFB400;
    font-weight: 700;
    font-family: Roboto,serif;
    &:hover {
        cursor: pointer;
    }
        
    
`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

`;

export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    border-radius: 10px;
`;

export const FrontSide = styled(CardFace)`
    background-color: #fff;
`;

export const BackSide = styled(CardFace)`
    transform: rotateY(180deg);
    background-color: #fff;
`;


export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 970px;
    gap: 2rem;
    flex-wrap: wrap;

`;

export const ServiceCard = styled.div`
    flex-basis: calc(33.3% - 2rem); /* Занимать ~1/3 ширины контейнера минус gap */
    min-width: 280px; /* Минимальная ширина */
    max-width: 310px; /* Максимальная ширина */
    height: 225px; /* Фиксированная высота */
    margin: 1rem 0; /* Отступы только сверху и снизу */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Распределение содержимого */
    align-items: center;
    background-color: #fff;
    padding: 1.8rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &:hover ${CardInner} {
        transform: rotateY(180deg);
    }
`;
