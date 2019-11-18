import nanoid from 'nanoid';

const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suit = ['♦', '♠', '♥', '♣'];

class CardDeck {
    cards=[];

    constructor() {
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                this.cards.push({rank:rank[j], suit:suit[i], id: nanoid()});
            }
        }
    }

    getCard = () => {
        let cardNum = Math.floor(Math.random() * this.cards.length);
        return (this.cards.splice(cardNum, 1))[0];

    };

    getCards = (howMany) => {
        const outCards = [];
        for (let i = 0; i < howMany; i++) {
            outCards.push(this.getCard());
        }
        return outCards;
    };
}

export default CardDeck;