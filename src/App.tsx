import React, {useState} from 'react';
import './App.css';

import {
    Card,
    Image,
    Text,
    Title,
    Button,
    CardContainer,
    WrapButton,
    BorderButton,
    ThemeSwitchButton
} from './components/components';
import GlobalStyle from './components/globalStyles';
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from './themes/theme';



function App() {
    const [theme, setTheme] = useState('day');
    const switchTheme = () => {
        setTheme(theme === 'day' ? 'night' : 'day');
    };
    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme === 'day' ? LightTheme : DarkTheme}>
                    <ThemeSwitchButton onClick={switchTheme}>Переключить тему </ThemeSwitchButton>
                    <GlobalStyle/>
                    <Card>

                        <Image></Image>
                        <CardContainer><Title>Headline</Title>
                            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                                venen.</Text>
                        </CardContainer>
                        <WrapButton>
                            <Button>See more</Button>
                            <BorderButton>Save</BorderButton>
                        </WrapButton>
                    </Card>
                </ThemeProvider>
            </header>
        </div>
    );
}

export default App;