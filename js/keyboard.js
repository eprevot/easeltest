function KeyboardManager(document) {
	this.currentKeyH = [];
	this.currentKeyV = [];
	
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));
}

KeyboardManager.prototype.KEYCODE_UP = 38;		//usefull keycode
KeyboardManager.prototype.KEYCODE_LEFT = 37;		//usefull keycode
KeyboardManager.prototype.KEYCODE_RIGHT = 39;		//usefull keycode
KeyboardManager.prototype.KEYCODE_DOWN = 40;

KeyboardManager.prototype.handleKeyDown = function (event){
    if((event.keyCode === KEYCODE_LEFT || event.keyCode === KEYCODE_RIGHT)
    	&& this.currentKeyH[0] !== event.keyCode) {
        this.currentKeyH.unshift(event.keyCode);
    }
    else if((event.keyCode === KEYCODE_DOWN || event.keyCode === KEYCODE_UP)
    	&& this.currentKeyV[0] !== event.keyCode) {
        this.currentKeyV.unshift(event.keyCode);
    }
};

KeyboardManager.prototype.handleKeyUp = function (event){
    if((event.keyCode === KEYCODE_UP || event.keyCode === KEYCODE_DOWN)
    	&& this.currentKeyV.indexOf(event.keyCode) > -1) {
    	if(this.currentKeyV.length < 2) {
    		this.currentKeyV = [];
    	}
    	else {
    		this.currentKeyV.splice(this.currentKeyV[1] === event.keyCode, 1);
    	}
    }
    if((event.keyCode === KEYCODE_LEFT || event.keyCode === KEYCODE_RIGHT)
    	&& this.currentKeyH.indexOf(event.keyCode) > -1) {
    	if(this.currentKeyH.length < 2) {
    		this.currentKeyH = [];
    	}
    	else {
    		this.currentKeyH.splice(this.currentKeyH[1] === event.keyCode, 1);
    	}
    }
};

KeyboardManager.prototype.isLeft = function () {
	return this.currentKeyH.length > 0 && this.currentKeyH[0] === KEYCODE_LEFT;
};

KeyboardManager.prototype.isRight = function () {
	return this.currentKeyH.length > 0 && this.currentKeyH[0] === KEYCODE_RIGHT;
};

KeyboardManager.prototype.isUp = function () {
	return this.currentKeyV.length > 0 && this.currentKeyV[0] === KEYCODE_UP;
};

KeyboardManager.prototype.isDown = function () {
	return this.currentKeyV.length > 0 && this.currentKeyV[0] === KEYCODE_DOWN;
};