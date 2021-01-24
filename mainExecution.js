const gameSimulator = require('./GameSimulation');
mainExcecution=()=>{
    console.log('Welcome to the GAMBLING SIMULATION');
    gameSimulator.winLoss();
    gameSimulator.yearRecord();
    gameSimulator.findLuckiestAndUnLuckiestMonth();
}
mainExcecution();
