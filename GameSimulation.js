const STAKE = 100;
const BET = 1;
const WIN = 1;
const LOSS = 0;
DAILY_LOW_LIMIT = (STAKE / 2);
DAILY_HIGH_LIMIT = (STAKE / 2 + STAKE);

class GameSimulator {
    winLoss = () => {
        var cash = STAKE;
        while (DAILY_LOW_LIMIT < cash && DAILY_HIGH_LIMIT > cash) {
            let betNumber = Math.floor(Math.random() * 2);
            switch (betNumber) {
                case 0:
                    console.log('loss 1$');
                    cash = cash - BET;
                    break;
                case 1:
                    console.log('win 1$');
                    cash = cash + BET;
                    break;
            }
            console.log('cash in hand ', cash);
        }
    }
}

let gameSimulator = new GameSimulator();
console.log('Welcome to the GAMBLING SIMULATION');
gameSimulator.winLoss();