import { Sprite } from 'phaser'

class Viejo extends Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'rpg-maker-sprites', 54)
    this.game = game
    game.add.existing(this)
    game.physics.arcade.enable(this)
    this.body.velocity.x = 10


    this.desplazamiento(6) // Del 0 al 7

    this.cursors = game.input.keyboard.createCursorKeys();
    //  Creates 30 bullets, using the 'bullet' graphic
    this.weapon = this.game.add.weapon(30, 'bullet');
    //  The bullet will be automatically killed when it leaves the world bounds
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
          
     //  The speed at which the bullet is fired
    this.weapon.bulletSpeed = 600;
          
    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
    this.weapon.fireRate = 100;
    this.weapon.trackSprite(this, 0, 0, true);
          
    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  desplazamiento(n) {
    if (n>3) {
      /*this.animations.add('down', [54, 55, 56], 10, true)
      this.animations.add('right', [78, 79, 80], 10, true)
      this.animations.add('left', [66, 67, 68], 10, true)
      this.animations.add('up', [90, 91, 92], 10, true)*/
      n = n-4
      this.animations.add('down', [3*n* +4*12,       3*n +1+48,       3*n +2+48], 10, true)

      this.animations.add('down', [3*n +48,       3*n +1+48,       3*n +2+48], 10, true)
      this.animations.add('left', [3*n +12+48,   3*n +1 +12+48,   3*n +2 +12+48], 10, true)
      this.animations.add('right',[3*n +12*2+48, 3*n +1 +12*2+48, 3*n +2 +12*2+48], 10, true)
      this.animations.add('up',   [3*n +12*3+48, 3*n +1 +12*3+48, 3*n +2 +12*3+48], 10, true)
    } else {
      this.animations.add('down', [3*n,       3*n +1,       3*n +2], 10, true)
      this.animations.add('left', [3*n +12,   3*n +1 +12,   3*n +2 +12], 10, true)
      this.animations.add('right',[3*n +12*2, 3*n +1 +12*2, 3*n +2 +12*2], 10, true)
      this.animations.add('up',   [3*n +12*3, 3*n +1 +12*3, 3*n +2 +12*3], 10, true)
    }
  }

  update() {
    
        if (this.cursors.up.isDown)
        {
          //this.game.physics.arcade.accelerationFromRotation(this.rotation, 300, this.body.acceleration);
          this.body.velocity.y = -150
          this.animations.play('up')
        }
        else
        {
          this.body.acceleration.set(0);
        }
    
        if (this.cursors.left.isDown)
        {
          //this.body.angularVelocity = -300;
          this.body.velocity.x = -150
          this.animations.play('left')
        }
        else if (this.cursors.right.isDown)
        {
          //this.body.angularVelocity = 300;
          this.body.velocity.x = 150
          this.animations.play('right')
        }
        else
        {
          //this.body.angularVelocity = 0;
          this.body.velocity.x = 0
          this.body.velocity.y = 0
        }
    
        if (this.fireButton.isDown)
        {
          this.weapon.fire();
          this.body.angularVelocity = -300;
        }
    
        this.game.world.wrap(this, 16);
    
    }

}

export default Viejo