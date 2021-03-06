class WorldGroupObject extends Phaser.Group{
	constructor(game){
		super(game);
		this.enableBody = true;
		this.bg = game.add.tileSprite(0, 0, game.stage.width, 360, 'city');
		this.ground = this.create(game.stage.width, game.stage.height, 'ground');
		this.ground.body.immovable = true; 
		this.ground.anchor.setTo(1, 1);
		this.ground.body.setSize(this.game.stage.width, 90, 0, 30);
		this.add(this.bg);
		this.add(this.ground);
		this.tileSpeed = 1;

	}

	setTileSpeed(speed){
		this.tileSpeed = speed;		
	}

	update(){
		this.bg.tilePosition.x -= this.tileSpeed;
	}
}
export default WorldGroupObject;