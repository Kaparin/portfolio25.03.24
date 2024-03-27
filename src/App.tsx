import React from 'react';
import './App.css';
import {Card, Image, Text, Title, Button, CardContainer, WrapButton} from './styles/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Card>
              <Image></Image>
              <CardContainer><Title>Headline</Title>
                  <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                         </CardContainer>
              <WrapButton><Button>See more</Button>
                  <Button>Save</Button></WrapButton>
          </Card>
      </header>
    </div>
  );
}

export default App;