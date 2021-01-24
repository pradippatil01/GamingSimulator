/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Gaming simulator using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : GameSimulator.js
*   @version   : v15.6.0
***************************************************************************/
const prompt = require('prompt-sync')();
const STAKE = 100;
const BET = 1;
var count = 0;
const DAILY_LOW_LIMIT = (STAKE / 2);
const DAILY_HIGH_LIMIT = (STAKE / 2 + STAKE);
var monthArray = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthRecordMap = new Map();
/**
 * @class GameSimulator create
 */
class GameSimulator {
    /**
     * @method winLoss calculate 20 day stake
     */
    winLoss = (month) => {
        var totalMonthEarn = 0;
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
            totalMonthEarn = totalMonthEarn + cash;
            gameRecord[i] = totalMonthEarn;
        }
        monthRecordMap.set(month, totalMonthEarn);
        return gameRecord;
    }
    /**
     * @method dailyRecord print day record of month
     */
    dailyRecord = (gameRecord) => {
        for (let i = 0; i < gameRecord.length; i++) {
            console.log('day ', i, ' => ', gameRecord[i]);
        }
    }
    /** 
     * @method monthRecord whole month earn and store in map
     */
    monthRecord = () => {
        for (let i = 0; i < count; i++) {
            console.log(monthArray[i], '==>', monthRecordMap.get(monthArray[i]));
        }
    }

    /**
     * @method findLuckiestAndUnLuckiestMonth print lucky and unlucky month
     */
    findLuckiestAndUnLuckiestMonth = () => {
        var maxLoss = monthRecordMap.get(monthArray[0]);
        var index;
        for (let i = 0; i < monthRecordMap.size; i++) {
            if (maxLoss > monthRecordMap.get(monthArray[i])) {
                maxLoss = monthRecordMap.get(monthArray[i]);
                index = monthArray[i];
            }
        }
        console.log('unlucky month', index, 'with profit', maxLoss);
        var maxProfit = monthRecordMap.get(monthArray[0]);
        var index;
        for (let i = 0; i < monthRecordMap.size; i++) {
            if (maxProfit < monthRecordMap.get(monthArray[i])) {
                maxProfit = monthRecordMap.get(monthArray[i]);
                index = monthArray[i];
            }
        }
        console.log('lucky month', index, 'with profit', maxProfit);
    }
    gameStart = () => {
        var input;
        do {
            if (count < monthArray.length) {
                var gameData = this.winLoss(monthArray[count]);
                console.log('In ', monthArray[count], ' month', monthRecordMap.get(monthArray[count]), 'stake remain');
                this.dailyRecord(gameData);
                input = prompt('do you want to continue y/n :-');
                count++;
            } else {
                input = 'n';
            }
        } while (input == 'y');

    }
}
module.exports = new GameSimulator;

