import {Car, Drone} from './classes';
import {fleet} from './fleet-data';
import {FleetDataService} from './services/fleet-data-service';

let dataService = new FleetDataService();
dataService.loadData(fleet);

// let car = dataService.getCarByLicense("EFG456");

// let cars = dataService.getCarsSortedByLicense();

let cars = dataService.filterCarsByMake("o");

console.log(cars);
