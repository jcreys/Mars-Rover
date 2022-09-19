const xPos = 0;
const yPos = 0;

const direction = ['N', 'E', 'W', 'S']

const leftwardDir = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N'
}
const rightwardDir = {
    'N': 'E',
    'W': 'N',
    'S': 'W',
    'E': 'S'
}
class Rover {
    constructor(xPos, yPos, dir) {
        //this.id = id
        this.xPos = xPos
        this.yPos = yPos
        this.dir = dir
    }
    spinL() {
        //todo
    }
    spinR() {
        //todo    
    }
    move() {
        //todo
    }
    processCommands() {
        //todo
    }
    processCommand(){
        //todo
    }
}

function processCommands (testInput) {
    
}

const Plateau =  {
    upperBound: {xPos: x, yPos: y},
    lowerBound: Position
}

