const STAKE = 100;
const BET = 1;
const WIN = 1;
const LOSS = 0;
const DAILY_LOW_LIMIT = (STAKE / 2);
const DAILY_HIGH_LIMIT = (STAKE / 2 + STAKE);
var monthArray = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayRecordData = new Map();
var monthRecordData = new Map();
var dayLoss = new Map();
var dayWon = new Map();
var daysValueMap = new Map();
class GameSimulator {
    winLoss = () => {
        for (let j = 0; j < monthArray.length; j++) {
            var gameRecord = [];
            for (let i = 0; i < 20; i++) {
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
            this.dailyRecord(gameRecord, monthArray[j]);
            this.monthRecord(gameRecord, monthArray[j])
        }
    }
    dailyRecord = (gameData, month) => {
        console.log(month,"==>")
        for (let i = 0; i < gameData.length; i++) {
            console.log('Day ', i, ' record ', gameData[i]);
        }
    }
    monthRecord = (gameRecord, month) => {
        var totalMonthEarn = 0;
        for (let i = 0; i < 20; i++) {
            totalMonthEarn = totalMonthEarn + gameRecord[i];
        }
        monthRecordData.set(month, totalMonthEarn);
    }

    yearRecord = () => {
        for (let i = 0; i < monthRecordData.size; i++) {
            console.log(monthArray[i], ' total cash ==> ', monthRecordData.get(monthArray[i]))
        }
    }
}

let gameSimulator = new GameSimulator();
console.log('Welcome to the GAMBLING SIMULATION');
gameSimulator.winLoss();
gameSimulator.yearRecord();

 