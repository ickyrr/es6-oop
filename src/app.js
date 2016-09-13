import {Car, Drone} from './classes';
import {fleet} from './fleet-data';
import {FleetDataService} from './services/fleet-data-service';

let dataService = new FleetDataService();
dataService.loadData(fleet);

for(let e of dataService.errors) {
	console.log(e.message);
}
