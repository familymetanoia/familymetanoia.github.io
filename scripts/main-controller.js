//main-controller.js

(function (){
	'use strict';
	
angular
.module('myApp', [])

// controller here
.controller('main_controller', main_controller );
	
	function main_controller() {
		var vm = this;
		
		
		
		
		vm.serverTime = moment(new Date()).utc().tz("Europe/Oslo").format("dddd, MMM Do YYYY h:mm A");//"2018/04/14 2:00 PM"
		vm.serverTimedisplay = vm.serverTime;
		
		vm.serverTime_Date = moment(new Date()).utc().tz("Europe/Oslo").format("YYYY/MM/DD HH:mm ZZ");//"2018/04/14 2:00 PM"
		vm.serverTime_Datestring = vm.serverTime_Date;
		
		//"2018-04-13T06:03:18.258Z"
		vm.records = [{
			Name: "Willbo | Lucio | Chi | Mykonos | Mongo | Jay",
			Country: "Philippines",
			City: "Asia/Manila",
			Converted_Date_Time: moment(vm.serverTime_Datestring).tz("Asia/Manila").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Jaja | Ellie | Cheska | Amanda",
			Country: "Philippines",
			City: "Asia/Manila",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("Asia/Manila").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Ethan",
			Country: "California",
			City: "America/Los_Angeles",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Los_Angeles").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Mie",
			Country: "Japan",
			City: "Asia/Tokyo",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("Asia/Tokyo").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Ice | Bear",
			Country: "America",
			City: "America/Monterrey",
			Date_Time: new Date(),
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Monterrey").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Deance | Bababoowee ",
			Country: "America",
			City: "America/Toronto",
			Date_Time: new Date(),
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Toronto").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Snow Bunny",
			Country: "America",
			City: "America/Anchorage",
			Date_Time: new Date(),
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Anchorage").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Kriszke",
			Country: "^_^",
			City: "Europe/Oslo",
			Date_Time: new Date(),
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("Europe/Oslo").format('dddd, MMM Do YYYY h:mm A')
		},
		{
			Name: "Zack",
			Country: "^_^",
			City: "America/Kentucky/Monticello",
			Date_Time: new Date(),
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Kentucky/Monticello").format('dddd, MMM Do YYYY h:mm A')
		}
		];
		
		vm.newShares = {};
		
		vm.addShares = function (){
			vm.shares.push({
				Items: vm.newShares.Items,
				Members: vm.newShares.Members,
				Seller: vm.newShares.Seller,
				Raid_Date: new Date(),
				Status: "Open",
				Closed_Date: new Date()
			});
		};
		
		vm.saveToFirebase = function () {
		    var emailObject = {
			email: vm.newShares.Items
		    };

		    firebase.database().ref('subscription-entries').push().set(emailObject)
			.then(function(snapshot) {
			    success(); // some success method
			}, function(error) {
			    console.log('error' + error);
			    error(); // some error method
			});
		}
	}
})();
