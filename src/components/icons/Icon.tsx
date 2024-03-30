import React from 'react';
// @ts-ignore
import iconsSprite from "../../assets/sprite.svg";


type IconPropsType = {
    iconId: string;
    fill?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "30"} height={props.height || "30"} viewBox={props.viewBox || "0 0 512 512"}>
            <symbol fill="none" viewBox="0 0 18 18" id="Blog" xmlns="http://www.w3.org/2000/svg"> </symbol>
                <use fill={props.fill || 'black'} xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
);
};

