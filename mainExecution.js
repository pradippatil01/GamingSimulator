const gameSimulator = require('./GameSimulation');
mainExcecution = () => {
    console.log('Welcome to the GAMBLING SIMULATION');
    gameSimulator.gameStart();
    gameSimulator.monthRecord();
    gameSimulator.findLuckiestAndUnLuckiestMonth();
}
mainExcecution();
