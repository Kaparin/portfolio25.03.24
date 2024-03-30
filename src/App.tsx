import React from 'react';
import './App.css';
import GlobalStyle from './components/globalStyles';
import {Aside} from './components/menu/Aside';
import {Header} from "./layout/header/Header";
import {Nav} from "./components/navigation/Nav";
import {MainContainer} from "./components/MainContainer";
import {Services} from "./layout/sections/MyServices/Services";
import {PricePlan} from "./layout/sections/PricePlan/PricePlan";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Header/>
            <MainContainer>
                {/*<Aside />*/}

                <Services/>
                <PricePlan/>
            </MainContainer>
        </div>
    );
}

export default App;