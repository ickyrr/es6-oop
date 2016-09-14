import {Car, Drone} from '../classes';
import {DataError} from './data-error';

export class FleetDataService {

	constructor() {
		this.cars = [];
		this.drones = [];
		this.errors = [];
	}

	loadData(fleet) {

		for(let data of fleet) {

			switch(data.type) {
				case 'car':
					if(this.validateCarData(data)) {
						let car = this.loadCar(data);
						if(car) {
							this.cars.push(car);
						}
					} else {
						let e = new DataError('Invalid car data', data);
						this.errors.push(e);
					}
				break;

				case 'drone':
					if(this.validateDroneData(data)) {
						let drone = this.loadDrone(data);
						this.drones.push(drone);
					} else {
						let e = new DataError('Invalid drone data', data);
						this.errors.push(e);
					}
				break;

				default:
					let e = new DataError('Invalid vehicle data', data);
					this.errors.push(e);
				break;
			}

		}

	}

	validateCarData(car) {

		let requiredProps = 'license model latLong miles make'.split(' ');
		let hasErrors = false;

		for(let field of requiredProps) {

			if(!car[field]) {
				this.errors.push(new DataError(`Invalid fields ${field}`, car));
				hasErrors = true;
			}

		}

		if(Number.isNaN(Number.parseFloat(car.miles))) {

			this.errors.push(new DataError('Invalid milage', car));
			hasErrors = true;

		}

		return !hasErrors;

	}

	validateDroneData(drone) {

		let requiredProps = "license type model base latLong airTimeHours".split(' ');
		let hasNoErrors = false;

		for(let field of requiredProps) {
			if(!drone[field]) {
				this.errors.push(new DataError(`Invalid fields ${field}`, drone));
			}
		}

	}

	loadCar(car) {
		try {
			let c = new Car(car.license, car.model, car.latLong);
			c.miles = car.miles;
			c.make = car.make;
			return c;
		} catch(e) {
			this.errors.push(new DataError('error loading car', car));
		}
		return null;
	}

	loadDrone(drone) {
		try {
			let d = new Drone(drone.license, drone.model, drone.latLong);
			d.airTimeHours = drone.airTimeHours;
			d.base = drone.base;
			return d;
		} catch(e) {
			this.errors.push(new DataError('error loading drone', drone));
		}
		return null;
	}

	getCarByLicense(license) {
		return this.cars.find(function(car) {
			return car.license === license;
		});
	}

	getCarsSortedByLicense() {
		return this.cars.sort( (car1, car2) => {

			if(car1.license < car2.license) {
				return -1
			}
			if(car1.license > car2.license) {
				return 1;
			}

			return 0;

		});
	}

	filterCarsByMake(filter) {
		return this.cars.filter(car => car.make.indexOf(filter) >= 0);
	}



}
