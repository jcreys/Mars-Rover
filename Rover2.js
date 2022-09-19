var directions = {
    north: {
        left: 'west',
        right: 'east',
        move: function() {
            this._y ++;
        }
    },
    south: {
        left: 'east',
        right: 'west',
        move: function() {
            this._y --;
        }
    },
    east: {
        left: 'north',
        right: 'south',
        move: function() {
            this._x ++;
        }
    },
    west: {
        left: 'south',
        right: 'north',
        move: function() {
            this._x --;
        }
    }
};

class Rover2 {
  constructor(direction, x, y) {
    this._direction = direction;
    this._x = x;
    this._y = y;
  }
  turnLeft() {
    this._direction = directions[this._direction].left;
  }
  turnRight() {
    this._direction = directions[this._direction].right;
  }
  move() {
    directions[this._direction].move.call(this);
  }
  getDirection = function () {
    return this._direction;
  };
  getPosition() {
    return {
      x: this._x,
      y: this._y,
    };
  }
}

module.exports = Rover2

