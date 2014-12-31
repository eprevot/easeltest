function KeyboardManager(document) {
	this.currentKeyH = null;
	
	this.handleKeyDown = handleKeyDown;
	this.handleKeyUp = handleKeyUp;
	this.isLeft = isLeft;
	this.isRight = isRight;
	this.isUp = isUp;
	this.isDown = isDown;
	
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));
}

var KEYCODE_UP = 38;		//usefull keycode
var KEYCODE_LEFT = 37;		//usefull keycode
var KEYCODE_RIGHT = 39;		//usefull keycode
var KEYCODE_DOWN = 40;

function handleKeyDown(event){
    if(event.keyCode == KEYCODE_LEFT || event.keyCode == KEYCODE_RIGHT) {
        this.currentKeyH = event.keyCode;
    }
    else if(event.keyCode == KEYCODE_DOWN || event.keyCode == KEYCODE_UP) {
        this.currentKeyV= event.keyCode;
    }   
}

function handleKeyUp(event){
    if(this.currentKeyV == event.keyCode) {
    	this.currentKeyV = null;
    }
    if(this.currentKeyH == event.keyCode) {            
    	this.currentKeyH = null;
    }
}

function isLeft() {
	return this.currentKeyH == KEYCODE_LEFT;
}

function isRight() {
	return this.currentKeyH == KEYCODE_RIGHT;
}

function isUp() {
	return this.currentKeyV == KEYCODE_UP;
}

function isDown() {
	return this.currentKeyV == KEYCODE_DOWN;
}