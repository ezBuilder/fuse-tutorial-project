var Observable=require("FuseJS/Observable");
var textStr=Observable("hello ");


var textInput=textStr.map(
	function(x){
		return x;
});


// current

function changeText(arg){
	textStr.value=arg.data;
}
module.exports={
	textStr:textStr,
	textInput:textInput,
};