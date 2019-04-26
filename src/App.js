import React from 'react';
import Characters from "./Characters.json";
import Wrapper from "./components/wrapper";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/charactersCard"
import {Col, Container} from "./components/Grid"
import shuffle from 'shuffle-array';

class App extends React.Component{
  state = {
     Characters,
    isClicked: false
  }

  
   onHandleShuffleCharacters = () => {
   //const characterArr = this.state.Characters
   
  shuffle(Characters)
  this.setState({isClicked: true})  
  // return console.log()
    
   }


render(){
  shuffle(Characters)
 console.log(this.state.Characters)
 //console.log(this.shuffleCharacters)
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
            key={character.id}
            id={character.id}
            HandleShuffle={this.onHandleShuffleCharacters}
           
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
