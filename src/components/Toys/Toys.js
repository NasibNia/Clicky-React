import React, { Component } from 'react';
import Navbar from "./Navbar";
import DisplayCards from "./DisplayCards";
import Wrapper from "../Wrapper";
import toys from "./toys.json";
import Container from './Container';
import Row from "./Row"
import Col from "./Col"


class Toys extends Component {

  state = {
    toys : toys ,
    score : 0,
    topScore : 0
  };


  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleGuess = id => {
    let currentToy = this.state.toys.filter(x=>(x.id === id))[0];
    if (currentToy.guessed === true){
      alert("you lost; start over");
      this.Restart();
    } else {
      currentToy.guessed = true;
      this.Shuffle(this.state.toys);
      this.setState({toys : this.state.toys , score : this.state.score + 1 });
    }
  }
  Max = (a,b) =>{
    if (a>b) {
      return a;
    } else {
      return b;
    }
  }

  Restart = () =>{
    // console.log(this.state.toys.map(x => {(x.id = x.id),(x.image = x.image),(x.guessed = false)}));
    for (let i = 0; i < this.state.toys.length; i++) {
      this.state.toys[i].guessed = false; 
    }
    // const restartToys = this.state.toys.map(x => {x.id= x.id,x.image=x.image,x.guessed = false})
    // this.setState({toys : restartToys,
    //               topScore : this.Max(this.state.score , this.state.topScore),
    //               score : 0})
    this.Shuffle(this.state.toys);
    this.setState({toys : this.state.toys,
                   topScore : this.Max(this.state.score , this.state.topScore),
                   score : 0})

  }

    render() {
      return (
        <Container>
          <Row>
            <Navbar score = {this.state.score} topScore={this.state.topScore}/>
          </Row>
          <Row>
            {this.state.toys.map (x => (
              <DisplayCards id={x.id}
                            key={x.id}
                            guessed = {x.guessed}
                            image = {x.image}
                            handleGuess={this.handleGuess}
              />
            ))};            
          </Row>
        </Container> 
      );
    }
  }

  export default Toys;
