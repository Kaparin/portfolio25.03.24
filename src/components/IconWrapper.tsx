import styled from "styled-components";

type IconWrapperProps = {
    color?: string
    hoverColor?: string
    border?: string
    radius?: string
    size?: string
    children?: React.ReactNode

}
export const IconWrapper = styled.span<IconWrapperProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.size || '40px'};
    height: ${(props) => props.size || '40px'};
    border-radius: ${(props) => props.radius};
    border: ${(props) => props.border};
    background-color: ${(props) => props.color};
    :hover {
        background-color: ${(props) => props.hoverColor};
    }
    @media (max-width: 1150px) {
        width: 30px;
        height: 30px;
       
    }
`;