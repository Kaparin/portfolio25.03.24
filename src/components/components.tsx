import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.background};
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 20px;
`

export const Image = styled.img`
    margin: 10px 10px 0 10px;
    object-fit: cover;
    width: 100%;
    max-width: 280px;
    height: 170px;
    background:  ${({theme}) => theme.image};  /*${(props) => props.theme.image}; */
    border-radius: 10px;
    
`

export const Title = styled.h1`
    color:  ${(props) => props.theme.colors.title}; /*${({ theme }) => theme.colors.title};*/
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 20px 0;
`

export const Text = styled.p`
    color:${(props) => props.theme.colors.text};
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    width: 260px;
    text-align: left;
    margin: 0;
`

export const Button = styled.button` /*${({ theme }) => theme.colors.button.backgroundColor};*/
    width: 86px;
    height: 30px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.button.backgroundColor};
    color: ${(props) => props.theme.colors.button.textColor};
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif; 
    font-size: 10px;
    font-weight: 700;
    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

export const BorderButton = styled.button`
    width: 86px;
    height: 30px;
    background: #FFF;
    color: ${(props) => props.theme.colors.button.textColorBorder};
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.button.backgroundColor};
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

export const WrapButton = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
`
type ButtonProps = {
    theme?: any;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}
export const ThemeSwitchButton = styled.button<ButtonProps>`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`;