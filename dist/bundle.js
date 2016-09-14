/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classes = __webpack_require__(1);

	var _fleetData = __webpack_require__(5);

	var _fleetDataService = __webpack_require__(6);

	var dataService = new _fleetDataService.FleetDataService();
	dataService.loadData(_fleetData.fleet);

	// let car = dataService.getCarByLicense("EFG456");

	// let cars = dataService.getCarsSortedByLicense();

	var cars = dataService.filterCarsByMake("o");

	console.log(cars);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Drone = exports.Car = undefined;

	var _car = __webpack_require__(2);

	var _car2 = _interopRequireDefault(_car);

	var _drone = __webpack_require__(4);

	var _drone2 = _interopRequireDefault(_drone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Car = _car2.default;
	exports.Drone = _drone2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vehicle = __webpack_require__(3);

	var _vehicle2 = _interopRequireDefault(_vehicle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Car = function (_Vehicle) {
		_inherits(Car, _Vehicle);

		function Car(license, model, latLong) {
			_classCallCheck(this, Car);

			var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, license, model, latLong));

			_this.miles = null;
			_this.make = null;
			return _this;
		}

		return Car;
	}(_vehicle2.default);

	exports.default = Car;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vehicle = function Vehicle(license, model, latLong) {
		_classCallCheck(this, Vehicle);

		this.license = license;
		this.model = model;
		this.latLong = latLong;
	};

	exports.default = Vehicle;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vehicle = __webpack_require__(3);

	var _vehicle2 = _interopRequireDefault(_vehicle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Drone = function (_Vehicle) {
		_inherits(Drone, _Vehicle);

		function Drone(license, model, latLong) {
			_classCallCheck(this, Drone);

			var _this = _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).call(this, license, model, latLong));

			_this.airTimeHours = null;
			_this.base = null;
			return _this;
		}

		return Drone;
	}(_vehicle2.default);

	exports.default = Drone;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var fleet = exports.fleet = [{
		license: 'ABC123',
		type: 'drone',
		model: 'Amazon 1250',
		base: 'New York',
		latLong: '40.775594 -73.974615',
		airTimeHours: '300'
	}, {
		license: 'EFG456',
		type: 'car',
		make: 'toyota',
		model: 'Toyota RAV4',
		miles: '4565',
		latLong: '46.775594 -63.974615'
	}, {
		license: 'TYG123',
		type: 'drone',
		model: 'Amazon 1250',
		base: 'New York',
		latLong: '40.775594 -73.974615',
		airTimeHours: '400'
	}, {
		license: 'LKJ354',
		type: 'car',
		make: 'hyundai',
		model: 'Toyota 86',
		miles: '4565',
		latLong: '234.775594 -56.23465'
	}];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.FleetDataService = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classes = __webpack_require__(1);

	var _dataError = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FleetDataService = exports.FleetDataService = function () {
		function FleetDataService() {
			_classCallCheck(this, FleetDataService);

			this.cars = [];
			this.drones = [];
			this.errors = [];
		}

		_createClass(FleetDataService, [{
			key: 'loadData',
			value: function loadData(fleet) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {

					for (var _iterator = fleet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var data = _step.value;


						switch (data.type) {
							case 'car':
								if (this.validateCarData(data)) {
									var car = this.loadCar(data);
									if (car) {
										this.cars.push(car);
									}
								} else {
									var _e = new _dataError.DataError('Invalid car data', data);
									this.errors.push(_e);
								}
								break;

							case 'drone':
								if (this.validateDroneData(data)) {
									var drone = this.loadDrone(data);
									this.drones.push(drone);
								} else {
									var _e2 = new _dataError.DataError('Invalid drone data', data);
									this.errors.push(_e2);
								}
								break;

							default:
								var e = new _dataError.DataError('Invalid vehicle data', data);
								this.errors.push(e);
								break;
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: 'validateCarData',
			value: function validateCarData(car) {

				var requiredProps = 'license model latLong miles make'.split(' ');
				var hasErrors = false;

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = requiredProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var field = _step2.value;


						if (!car[field]) {
							this.errors.push(new _dataError.DataError('Invalid fields ' + field, car));
							hasErrors = true;
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				if (Number.isNaN(Number.parseFloat(car.miles))) {

					this.errors.push(new _dataError.DataError('Invalid milage', car));
					hasErrors = true;
				}

				return !hasErrors;
			}
		}, {
			key: 'validateDroneData',
			value: function validateDroneData(drone) {

				var requiredProps = "license type model base latLong airTimeHours".split(' ');
				var hasNoErrors = false;

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = requiredProps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var field = _step3.value;

						if (!drone[field]) {
							this.errors.push(new _dataError.DataError('Invalid fields ' + field, drone));
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: 'loadCar',
			value: function loadCar(car) {
				try {
					var c = new _classes.Car(car.license, car.model, car.latLong);
					c.miles = car.miles;
					c.make = car.make;
					return c;
				} catch (e) {
					this.errors.push(new _dataError.DataError('error loading car', car));
				}
				return null;
			}
		}, {
			key: 'loadDrone',
			value: function loadDrone(drone) {
				try {
					var d = new _classes.Drone(drone.license, drone.model, drone.latLong);
					d.airTimeHours = drone.airTimeHours;
					d.base = drone.base;
					return d;
				} catch (e) {
					this.errors.push(new _dataError.DataError('error loading drone', drone));
				}
				return null;
			}
		}, {
			key: 'getCarByLicense',
			value: function getCarByLicense(license) {
				return this.cars.find(function (car) {
					return car.license === license;
				});
			}
		}, {
			key: 'getCarsSortedByLicense',
			value: function getCarsSortedByLicense() {
				return this.cars.sort(function (car1, car2) {

					if (car1.license < car2.license) {
						return -1;
					}
					if (car1.license > car2.license) {
						return 1;
					}

					return 0;
				});
			}
		}, {
			key: 'filterCarsByMake',
			value: function filterCarsByMake(filter) {
				return this.cars.filter(function (car) {
					return car.make.indexOf(filter) >= 0;
				});
			}
		}]);

		return FleetDataService;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataError = exports.DataError = function DataError(message, data) {
		_classCallCheck(this, DataError);

		this.message = message;
		this.data = data;
	};

/***/ }
/******/ ]);