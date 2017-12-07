import { Sprite } from 'phaser'

class Viejo extends Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'rpg-maker-sprites', 54)

    game.add.existing(this)
  }
}

export default Viejo