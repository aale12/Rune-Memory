import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

let guessedUnique = [];
class App extends Component {
  state = {
    mode: "normalMode",
    friends: friends.slice(0, 15),
    guessed: [],
    score: 0,
    highScore: 0
  };

  setMode = _ => {
    if (this.state.mode === "normalMode") {
      this.setState({ mode: "hardMode", friends: friends })
    } else if(this.state.mode === "hardMode"){
      this.setState({ mode: "normalMode", friends: friends.slice(0, 15), })
    }
  }

  removeFriend = id => {
    const friends = this.state.friends.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    if (this.state.guessed.indexOf(id) < 0) {
      guessedUnique.push(id);
    } else {
      if (this.state.highScore < guessedUnique.length) {
        this.setState({ highScore: guessedUnique.length })
      }
      alert("wrong");
      guessedUnique = [];
    }
    this.setState({ friends, guessed: guessedUnique, score: guessedUnique.length });
    console.log(guessedUnique);
  };

  render() {
    return (
      <Wrapper>
        <Title
          setMode={this.setMode}
          score={this.state.score}
          highScore={this.state.highScore}>Rune Memorizer</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
