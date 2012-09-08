/*
Dylan R. Wahlstrom 
SDI 1209
Project 2
*/


// Declare Varibles
var bandneed = "budget";
var transport = "van"
var arrmilesbetween = [250, 350, 580, 420, 300, 150, 450, 120, 380];
var booVariable = true


// Procedure
var hoursoftravel = function(totalmiles, averagemph) {
	var outcome = totalmiles/averagemph;

	console.log("The total hours of travel on tour is " + outcome + " hours.");
	
};

// Boolean Function 
	if (booVariable === true) {
		console.log("The band will be able to afford hotels, gas, and pay each band member as well as the crew.");
	}	else {
		console.log("The band will not be successful on tour and not make a profit.");
	};
	


// Number Function
var milestonextcity = 250; 
while (milestonextcity > 0) {
	console.log(milestonextcity + " miles to the next city.");
	milestonextcity--;
}; 

// String Function
	
if (bandneed === "budget"){
	console.log("Every band needs to create a " + bandneed + " to be successful in a band.");
}
	console.log("Without a " + transport + " no band will be able to tour.");
	
// Array Function

var countUp = function(howmany){

    for(venues=0;venues<=9;venues++){
        console.log(venues + " left on tour.");
        
        
        if (venues < 1){
            console.log("You are headed home and get to sleep in your own bed!");
              
        }else{
            console.log("You still have venues and more shows to play!");   
        };
        console.log(" ");
    };
    return venues;
};	




// Main Code - function calls
hoursoftravel(3000,60)
var numOfVenues = countUp();
console.log("Number of venues played: " + numOfVenues);
