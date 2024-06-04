class scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/background_image.jpg");
    this.load.image("player_1", "assets/HERO_04d.png");
    this.load.image("player_2", "assets/HERO_04i.png");
    this.load.image("player_3", "assets/HERO_08c.png");

    this.load.spritesheet("fire_1","spritesheet/fire_4.png",{frameWidth: 250, frameHeight: 160});    
    this.load.spritesheet("fire_2","spritesheet/fire_2.png",{frameWidth: 250, frameHeight: 199});
    this.load.spritesheet("fire_3","spritesheet/lightning.png",{frameWidth: 60, frameHeight: 270});

  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");

    
  }
}
