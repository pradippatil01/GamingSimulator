const STAKE = 100;
const BET = 1;
const WIN = 1;
const LOSS = 0;
class GameSimulator {
    winLoss = () => {
        let betNumber = Math.floor(Math.random() * 2);
        switch (betNumber) {
            case 0:
                console.log('loss 1$');
                break;
            case 1:
                console.log('win 1$');
                break;
        }
    }
}
let gameSimulator = new GameSimulator();
console.log('Welcome to the GAMBLING SIMULATION');
gameSimulator.winLoss();