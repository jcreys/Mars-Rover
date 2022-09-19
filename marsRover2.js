const gridStart = {
    x: 0,
    y: 0
}

const gridEnd = {
    x: 5,
    y: 5
}

const leftwardDir = {
    'N' : 'W',
    'W' : 'S',
    'S' : 'E',
    'E' : 'N'
}

const rightwardDir = {
    'N' : 'E',
    'E' : 'S',
    'S' : 'W',
    'W' : 'N'
}

class Rover {
    constructor(xPos, yPos, dir) {
        this.xPos = xPos
        this.yPos = yPos
        this.dir = dir
    }

    spinL() {
        this.dir = leftwardDir[this.dir];
    }
    
    spinR() {
        this.dir = rightwardDir[this.dir];   
    }
    
    move() {
        if (this.dir === 'N') {
            this.yPos += 1;
        } else if (this.dir === 'S') {
            this.yPos -= 1;
        } else if (this.dir === 'E') {
            this.xPos += 1;
        } else if (this.dir === 'W') {
            this.xPos -= 1;
        }
    }
    
    processCommands(commands) {
        for(let i = 0, l = commands.length; i < l; i += 1) {
            const command = commands[i];
            if (command === 'L') {
                this.spinL();
            } else if (command === 'R') {
                this.spinR();
            } else if (command === 'M') {
                this.move();
            }
        }
    }

    printCoordinates() {
        return `${this.xPos} ${this.yPos} ${this.dir}`
    }
}

const rover1 = new Rover(1, 2, 'N');
rover1.processCommands('LMLMLMLMM')
console.log(rover1.printCoordinates())