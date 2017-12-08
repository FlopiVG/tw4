

class ControlSet {
    constructor (game,up, down, right, left, shot ) {
        //this.up = game.input.keyboard.addKey(Phaser.KeyCode[up], () => console.log('ola'));
        this.up = game.input.keyboard.addKey(Phaser.KeyCode.A);
        this.down = game.input.keyboard.addKey(Phaser.KeyCode[down]);
        this.right = game.input.keyboard.addKey(Phaser.KeyCode[right]);
        this.left = game.input.keyboard.addKey(Phaser.KeyCode[left]);
        this.shot = game.input.keyboard.addKey(Phaser.KeyCode[shot]); 
    }
}

export default ControlSet