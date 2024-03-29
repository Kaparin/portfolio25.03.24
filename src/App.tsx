import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import { Aside } from './components/menu/Aside';
import {Header} from "./layout/header/Header";
import {Nav} from "./components/navigation/Nav";



function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />

            {/*<Aside />*/}
            <Nav />

        </div>
    );
}

export default App;