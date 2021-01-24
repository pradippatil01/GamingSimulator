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
                    cash = cash - BET;
                    console.log('After loss 1$ cash', cash);
                    break;
                case 1:
                    cash = cash + BET;
                    console.log('After win 1$ cash', cash);
                    break;
            }
            console.log('cash in hand ',cash);
        }
    console.log('Done for day now resign ',cash);
    }
}

let gameSimulator = new GameSimulator();
console.log('Welcome to the GAMBLING SIMULATION');
gameSimulator.winLoss();