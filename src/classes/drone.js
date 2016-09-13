import Vehicle from './vehicle.js';

export default class Drone extends Vehicle {

	constructor(license,model,latLong) {
		super(license, model, latLong);
		this.airTimeHours = null;
		this.base = null;
	}

}
