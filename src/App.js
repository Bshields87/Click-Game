import React from 'react';
import Characters from "./Characters.json";
import Wrapper from "./components/wrapper";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/charactersCard"
import {Col, Container} from "./components/Grid"


class App extends React.Component{
  state = {
     Characters,
     "isClicked": false
  }

  shuffleCharacters = (event) => {
    const { } = event.target;


  }

render(){
  return (
    <Container>
      <Col size="md-12">
            <Jumbotron>
              <h1>HEEEEELLLLLOOOOOOOO NURSE</h1>
            </Jumbotron>
     </Col>
    <Wrapper>
    
      {
        this.state.Characters.map(character => {
          return (
            <Col size="md-4">
            <CharacterCard
            name={character.name}
            image={character.image}
            id={character.id}
           
            />
            </Col>
          )
        })
      }
   
      
    </Wrapper>
    </Container>
  )
}
}

export default App;
