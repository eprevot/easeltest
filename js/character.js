function Character(src) {
	this.src = src;
	this.img = new Image();
	this.spriteSheet = null;
	this.parent = null;
}

Character.prototype.draw = function(parent){
	this.loadSpriteSheet();
	this.parent = parent;
};

Character.prototype.loadSpriteSheet = function() {
    this.img.addEventListener("load", this.initSpriteSheet.bind(this));
    this.img.src = this.src;
};
 
Character.prototype.initSpriteSheet = function () {
	this.spriteSheet = new createjs.SpriteSheet({
	    // image à utiliser et à découper
	    images: [this.img],
	    // largeur, hauteur & point central de chacun des sprites
	    frames: {width: 64, height: 64, regX: 32, regY: 32}, 
	    animations: {    
	        walk: [0, 6, "walk"]
	    }
	});

	this.bmpAnimation = new createjs.BitmapAnimation(this.spriteSheet);
	this.bmpAnimation.gotoAndPlay("walk");
	this.bmpAnimation.name = "characterRun";
	this.bmpAnimation.direction = 90;
	this.bmpAnimation.vX = 4;
	this.bmpAnimation.x = this.parent.width/2;
	this.bmpAnimation.y = this.parent.height - 150;
	this.bmpAnimation.currentFrame = 0;
	this.parent.addChild(this.bmpAnimation);
};
