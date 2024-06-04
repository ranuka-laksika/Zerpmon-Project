class scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");

  }

  create() {
    const { width, height } = this.sys.game.config;

    this.background = this.add.image(0,0, "background");
    this.background.setOrigin(0, 0);
    this.background.setScale(width / this.background.width, height / this.background.height);

    this.player_1 = this.add.image(config.width/1.5, config.height/1.6, "player_1").on('pointerdown', () => {this.player_1.setScale(0.4);this.destroyPlayer_1()})
    .on('pointerup', () => this.player_1.setScale(0.5));
    this.player_1.setScale(0.5);
    this.player_2 = this.add.image(config.width/1.5, 225, "player_2");
    this.player_2.setScale(0.5);
    this.player_3 = this.add.image(380, 350, "player_3").on('pointerdown', () =>{ this.player_3.setScale(0.4); this.destroyPlayer_3()})
    .on('pointerup', () => this.player_3.setScale(0.5));
    this.player_3.setScale(0.5);
    


    this.player_3.setInteractive();
    this.player_1.setInteractive();
    

    // this.input.on('gameobjectdown', this.destroyPlayer_3, this);
    // this.input.on('gameobjectdown_1', this.destroyPlayer_1, this);
    
    this.anims.create({
      key: "fire_anim",
      frames: this.anims.generateFrameNumbers("fire_1"),
      frameRate:12,
      repeat: -1,
      // hideOnComplete: true,
    });


    this.anims.create({
      key: "fire_anim_1",
      frames: this.anims.generateFrameNumbers("fire_2"),
      frameRate:5,
      repeat: 0,
    });

    this.anims.create({ 
      key: "fire_anim_3",
      frames: this.anims.generateFrameNumbers("fire_3"),
      frameRate:10,
      repeat: -1,
    });

  }

  destroyPlayer_3(pointer, gameObject) {
    this.fire_1=this.add.sprite(450, 350, "fire_1");
    this.fire_1.setScale(0.5);
    this.animation=this.fire_1.play("fire_anim");
    this.tweens.add({
      targets: this.fire_1,
      x: 800,// Target x position

      duration: 700,      // Duration in milliseconds
      ease: "Linear",      // Easing function (Linear for constant speed)
      yoyo: false,          // Yoyo effect (returns to the starting position)
      repeat: 0,          // -1 means repeat indefinitely
      onComplete: () => {
        // Callback function when the tween completes (optional)
        console.log("Tween completed!");
        this.fire_1.destroy();
        this.fire_2=this.add.sprite(850, 350, "fire_2");
        this.fire_2.setScale(0.7);  
        this.fire_2.play("fire_anim_1");
        
      //   this.tweens.add({
      //     targets: this.background,
      //     duration: 100, // Duration of the vibration
      //     repeat: 0, // Repeat indefinitely
      //     yoyo: true,
      //     ease: 'Ease', // You can experiment with different easing functions
      //     x: this.background.x - 5, // Adjust these values to change the vibration intensity
      //     // y: this.background.y + 5,
      // });
      },
    });
      
  }

  destroyPlayer_1() {
    this.fire_3=this.add.sprite(config.width/1.5, 150, "fire_3");
    this.fire_3.setScale(1);
    this.animation=this.fire_3.play("fire_anim_3");
    this.time.addEvent({
      delay:800,
      callback: () => {
        this.fire_3.destroy();
      },
      loop: false,
    });
  }

}
