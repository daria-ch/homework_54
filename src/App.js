import React, {Component} from 'react';
import "./App.css";
import Card from "./components/Card/card";
import "./components/Card/cards/cards.css";
import CardDeck from "./CardDeck";
import PokerHand from "./PokerHand";

class App extends Component {
    state = {
        cards: []
    };
    result = 0;

    constructor(props) {
        super(props);
        const deck = new CardDeck();
        this.state.cards = deck.getCards(5);
        const hand = new PokerHand(this.state.cards);
        this.result = hand.getOutcome();
    }

    changeCards = () => {
        const deck = new CardDeck();
        const cards = deck.getCards(5);
        this.setState({cards});
        const hand = new PokerHand(cards);
        this.result = hand.getOutcome();
    };

    render() {
        const cards = this.state.cards.map(card => {
            return <Card
                key={card.id}
                rank={card.rank}
                suit={card.suit}/>
        });

        return (
            <div className="App">
                <p className="result">{this.result}</p>
                <button onClick={this.changeCards} className='btn'>Shuffle cards</button>
                <div className="playingCards faceImages">
                    {cards}
                </div>
            </div>
        );
    }
}

export default App;