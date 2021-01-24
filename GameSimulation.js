/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Gaming simulator using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : GameSimulator.js
*   @version   : v15.6.0
***************************************************************************/

const STAKE = 100;
const BET = 1;
const DAILY_LOW_LIMIT = (STAKE / 2);
const DAILY_HIGH_LIMIT = (STAKE / 2 + STAKE);
var monthArray = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthRecordData = new Map();
/**
 * @class GameSimulator create
 */
class GameSimulator {
    /**
     * @method winLoss calculate 20 day stake
     */
    winLoss = () => {
        var cash = 0;
        for (let j = 0; j < monthArray.length; j++) {
            var gameRecord = [];
            for (let i = 0; i < 20; i++) {
                cash = STAKE;
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
    /**
     * @method dailyRecord print day earn
     */
    dailyRecord = (gameData, month) => {
        for (let i = 0; i < gameData.length; i++) {
            //console.log('Day ', i, ' record ', gameData[i]);
        }
    }
    /** 
     * @method calculate whole month earn and store in map
     */
    monthRecord = (gameRecord, month) => {
        var totalMonthEarn = 0;
        for (let i = 0; i < 20; i++) {
            totalMonthEarn = totalMonthEarn + gameRecord[i];
        }
        monthRecordData.set(month, totalMonthEarn);
    }
    /**
     * @method yearRecord print all month earn
     */
    yearRecord = () => {
        for (let i = 0; i < monthRecordData.size; i++) {
            console.log(monthArray[i], ' total cash ==> ', monthRecordData.get(monthArray[i]))
        }
    }
    /**
     * @method findLuckiestAndUnLuckiestMonth print lucky and unlucky month
     */
    findLuckiestAndUnLuckiestMonth = () => {
        var maxLoss = monthRecordData.get(monthArray[0]);
        var index;
        for (let i = 0; i < monthRecordData.size; i++) {
            if (maxLoss > monthRecordData.get(monthArray[i])) {
                maxLoss = monthRecordData.get(monthArray[i]);
                index = monthArray[i];
            }
        }
        console.log('unlucky month', index, 'with profit', maxLoss);
        var maxProfit = monthRecordData.get(monthArray[0]);
        var index;
        for (let i = 0; i < monthRecordData.size; i++) {
            if (maxProfit < monthRecordData.get(monthArray[i])) {
                maxProfit = monthRecordData.get(monthArray[i]);
                index = monthArray[i];
            }
        }
        console.log('lucky month', index, 'with profit', maxProfit)
    }
}

module.exports = new GameSimulator;
