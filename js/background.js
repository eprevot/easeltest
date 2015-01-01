function Background(tileSrc, width, height) {
	this.tiles = [];
	this.img = new Image();
	this.tileSrc = tileSrc;
	this.width = width;
	this.height = height;
	this.parent = null;

	this.loadTile = loadTile;
	this.initTiles = initTiles;
	this.draw = function(parent) {
        this.loadTile();
        this.parent = parent;
    };
	this.move = move;
}

var SPEED = 0.25;

function loadTile() {
    this.img.addEventListener("load", this.initTiles.bind(this));
    this.img.src = this.tileSrc;
}
 
function initTiles() {
    var numBG = Math.ceil(this.width/this.img.width) +1;
    for (var i = 0; i < numBG; i++) {
        this.tiles.push(new createjs.Bitmap(this.img));
        this.tiles[i].x = i*(this.img.width -1);
        this.tiles[i].y = this.height - this.img.height;
        this.parent.addChildAt(this.tiles[i], i);
    }
    this.parent.update();
    //this.scaleX = 3;
    //this.scaleY = 3;
    //this.sourceRect = { x:0, y:0, width:this.width, height:this.height };
}
        
function move(delta, keyManager) {
    var decalX = 0;
    if(keyManager.isRight()) {
        decalX = -SPEED * delta;
    }
    else if(keyManager.isLeft()){
        decalX = SPEED * delta;
    }

    for (var i = this.tiles.length - 1; i >= 0; i--) {
        this.tiles[i].x += decalX;
        if (decalX < 0 && this.tiles[i].x < -this.img.width) {
            this.tiles[i].x += this.tiles.length * (this.img.width -1);
            this.parent.removeChild(this.tiles[i]);
            this.parent.addChildAt(this.tiles[i], this.tiles.length -1);
        }
        else if(decalX > 0 && this.tiles[i].x > this.width) {
            this.tiles[i].x -= this.tiles.length * (this.img.width -1);
            this.parent.removeChild(this.tiles[i]);
            this.parent.addChildAt(this.tiles[i], 0);
        }
    }
}
