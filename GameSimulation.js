const STAKE = 100;
const BET = 1;
const WIN = 1;
const LOSS = 0;
DAILY_LOW_LIMIT = (STAKE / 2);
DAILY_HIGH_LIMIT = (STAKE / 2 + STAKE);
var gameRecord = [];
class GameSimulator {
    winLoss = () => {
        for (let i = 1; i <= 20; i++) {
            var cash = STAKE;
            while (DAILY_LOW_LIMIT < cash && DAILY_HIGH_LIMIT > cash) {
                let betNumber = Math.floor(Math.random() * 2);
                switch (betNumber) {
                    case 0:
                        cash = cash - BET;
                        break;
                    case 1:
                        cash = cash + BET;
                        break;
                }
            }
            gameRecord[i] = cash;
        }
    }
    dailyRecord = () => {
        for (let i = 1; i <= 20; i++) {
            console.log('Day ',i,' record ', gameRecord[i]);
        }
    }
}

let gameSimulator = new GameSimulator();
console.log('Welcome to the GAMBLING SIMULATION');
gameSimulator.winLoss();
gameSimulator.dailRecord();