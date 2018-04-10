//main-controller.js

(function (){
	'use strict';
	
angular
.module('myApp', [])

// controller here
.controller('main_controller', main_controller );
	
	function main_controller() {
		var vm = this;
		
		vm.serverTime_Date = new Date("2018/04/14 11:00 AM");
		vm.serverTime_Datestring = "2018/04/14 11:00 +0200";
		
		vm.records = [{
			Name: "Boo | Jaja | Lucio | Ellie | Chi | Myk | Cheska | Mongo",
			Country: "Philippines",
			City: "Somewhere",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("Asia/Manila").format('dddd, MMM Do YYYY h:mm a')
		},
		{
			Name: "Ethan",
			Country: "California",
			City: "Girls We Unforgetable",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("America/Los_Angeles").format('dddd, MMM Do YYYY h:mm a')
		},
		{
			Name: "Mie",
			Country: "Japan",
			City: "Japan",
			Converted_Date_Time: moment(vm.serverTime_Datestring, 'YYYY/MM/DD HH:mm ZZ').tz("Asia/Tokyo").format('dddd, MMM Do YYYY h:mm a')
		},
		{
			Name: "",
			Country: "",
			City: "",
			Date_Time: new Date(),
			Converted_Date_Time: new Date(),
		}];
		
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
