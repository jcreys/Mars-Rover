const { expect } = require("chai")
const Rover = require('../Rover2')
describe("Rover",  ()=> {
    it('initializes with the correct values', ()=>{
        
        const rover = new Rover("north", 1, 2);
        expect(rover.getDirection()).to.equal('north');
        console.log('>>>>>>>',rover.getPosition())
        expect(rover.getPosition()).to.deep.equal({x: 1, y: 2});
    })
})

