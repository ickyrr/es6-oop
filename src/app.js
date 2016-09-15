import $ from 'jquery';
import {Car, Drone} from './classes';
import {fleet} from './fleet-data';
import {FleetDataService} from './services/fleet-data-service';
import {Button} from './ui/button';

let b = new Button("Click Me");
b.appendToElement($('body'));
console.log(b);
