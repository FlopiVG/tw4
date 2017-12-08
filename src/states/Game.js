/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Viejo from '../sprites/Viejo'
import ControlSet from '../sprites/ControlSet'

export default class extends Phaser.State {
  init () {}
  preload () {}



  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)



    this.game.physics.startSystem(Phaser.Physics.P2JS)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })


    this.game.add.existing(this.mushroom)

 //WEAPON


  

      //sprite = this.add.sprite(400, 300, 'ship');
  
      //sprite.anchor.set(0.5);
  
      game.physics.arcade.enable(this.mushroom);
  
      this.mushroom.body.drag.set(70);
      this.mushroom.body.maxVelocity.set(200);
  
      //  Tell the this.weapon to track the 'player' Sprite
      //  With no offsets from the position
      //  But the 'true' argument tells the this.weapon to track sprite rotation

  

  
     


      const cs1 = new ControlSet(game,'w','s','d','a','f')
      const cs2 = new ControlSet(game,'up','down','right','left','NUMPAD_0')
    this.viejo = new Viejo(game, 200, 200,'rpg-maker-sprites',7,cs1)
    new Viejo(game, 100, 200,'rpg-maker-sprites',6,cs2)

  }



  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
