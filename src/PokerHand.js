const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class PokerHand {
    rankCount = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, J: 0, Q: 0, K: 0, A: 0};
    suitCount = {'♠': 0, '♦': 0, '♥': 0, '♣': 0};

    pairs = 0;
    triples = 0;
    fours = 0;
    flush = 0;
    straight = 0;

    constructor(array) {

        for (let i = 0; i < array.length; i++) {
            this.rankCount[array[i].rank]++;
            this.suitCount[array[i].suit]++;
        }

        for (let key in this.rankCount) {
            if (this.rankCount[key] === 2) this.pairs++;
            if (this.rankCount[key] === 3) this.triples++;
            if (this.rankCount[key] === 4) this.fours++;
        }

        for (let key in this.suitCount) {
            if (this.suitCount[key] === 5) this.flush++;
        }

        if (this.pairs === 0 && this.triples === 0 && this.fours === 0)
        {
            for (let i = 12; i >= 3; i--) {
                let counter = 0;
                for (let j = i; j > i - 5; j--) {
                    if (j === -1) continue;
                    counter += this.rankCount[rank[j]];
                }
                if (counter === 5) {
                    this.straight = i;
                    break;
                }
                if (i === 3 && counter === 4 && this.rankCount['A']) this.straight = i;
            }
        }
    }

    getOutcome = () => {
        if(this.straight === 12 && this.flush === 1) return `Royal flush`;
        if(this.pairs === 1 && this.triples === 1) return `Full house`;
        if(this.pairs === 1) return `One pair`;
        if(this.pairs === 2) return `Two pairs`;
        if(this.triples === 1) return `Three of a kind`;
        if(this.fours === 1) return `Four of a kind`;
        if(this.straight !== 0 && this.flush === 1) return `Straight flush`;
        if(this.straight !== 0) return `Straight`;
        if(this.flush === 1) return `Flush`;
        else return `No combination`;
    };
}

export default PokerHand;