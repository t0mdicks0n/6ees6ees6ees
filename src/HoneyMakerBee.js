class HoneyMakerBee extends Bee {
	
	constructor () {
		super();
		this.age = 10;
		this.job = 'make honey';
		super.color = 'yellow';
		this.honeyPot = 0;
	}

	makeHoney () {
		this.honeyPot ++;
	}

	giveHoney () {
		this.honeyPot --;
	}
};
