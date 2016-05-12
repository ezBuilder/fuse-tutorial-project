var Observable= require ("FuseJS/Observable");
var GeoLocation=require ("FuseJS/GeoLocation");

//immediate
var immediateLocation=JSON.stringify(GeoLocation.location);


//time out
var timeoutLocation= Observable("");
var timeoutMs=5000;

GeoLocation.getLocation(timeoutMs).then(function(location){
	timeoutLocation.value=JSON.stringify(location);
});


//continus
var conninuousLocation=Observable("");
GeoLocation.onChanged=function(location) {
	conninuousLocation.value=JSON.stringify(location);
};

function startContinuousListener(){
	var intervalMs=1000;
	var desiredAccuracyInMeters=50;
	GeoLocation.startListening(intervalMs,desiredAccuracyInMeters);

}

function stopContinuousListener(){

	GeoLocation.stopListening();
}

module.exports={


	immediateLocation:immediateLocation,
	timeoutLocation:timeoutLocation,
	conninuousLocation:conninuousLocation,

	startContinuousListener:startContinuousListener,
	stopContinuousListener:stopContinuousListener
}