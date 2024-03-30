import styled from "styled-components";

type FlexWrapperProps = {
    justify?: string
    wrap?: string
    direction?: string
    align?: string
    children?: React.ReactNode
}
export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    justify-content: ${props => props.justify || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.align || "center"};
`