var Observable=require("FuseJS/Observable");
var slideValue=Observable(0.0);


function reset() {
	slideValue.value=0.0;
}


module.exports={
	slideValue:slideValue,
	reset:reset


};