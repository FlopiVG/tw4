/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Viejo from '../sprites/Viejo'

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

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })


    this.game.add.existing(this.mushroom)

 //WEAPON

      //  Creates 30 bullets, using the 'bullet' graphic
      this.weapon = this.game.add.weapon(30, 'bullet');
  
      //  The bullet will be automatically killed when it leaves the world bounds
      this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  
      //  The speed at which the bullet is fired
      this.weapon.bulletSpeed = 600;
  
      //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
      this.weapon.fireRate = 100;
  
      //sprite = this.add.sprite(400, 300, 'ship');
  
      //sprite.anchor.set(0.5);
  
      game.physics.arcade.enable(this.mushroom);
  
      this.mushroom.body.drag.set(70);
      this.mushroom.body.maxVelocity.set(200);
  
      //  Tell the this.weapon to track the 'player' Sprite
      //  With no offsets from the position
      //  But the 'true' argument tells the this.weapon to track sprite rotation
      this.weapon.trackSprite(this.mushroom, 0, 0, true);
  
      this.cursors = this.input.keyboard.createCursorKeys();
  
      this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR, () => console.log("hey"));


    this.viejo = new Viejo(game, 200, 200)

  }

  update() {
    
        if (this.cursors.up.isDown)
        {
          this.game.physics.arcade.accelerationFromRotation(this.mushroom.rotation, 300, this.mushroom.body.acceleration);
        }
        else
        {
          this.mushroom.body.acceleration.set(0);
        }
    
        if (this.cursors.left.isDown)
        {
          this.mushroom.body.angularVelocity = -300;
        }
        else if (this.cursors.right.isDown)
        {
          this.mushroom.body.angularVelocity = 300;
        }
        else
        {
          this.mushroom.body.angularVelocity = 0;
        }
    
        if (this.fireButton.isDown)
        {
          this.weapon.fire();
        }
    
        this.game.world.wrap(this.mushroom, 16);
    
    }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
