function calculateTip(){
var one=Number(document.getElementById('one').value);
var two=Number(document.getElementById('two').value);
var three=Number(document.getElementById('three').value);
var four=Number(document.getElementById('four').value);
var five=Number(document.getElementById('five').value);
var six=Number(document.getElementById('six').value);
var seven=Number(document.getElementById('seven').value);
var eight=Number(document.getElementById('eight').value);
var nine=Number(document.getElementById('nine').value);
var ten=Number(document.getElementById('ten').value);
var eleven=Number(document.getElementById('eleven').value);
var twelve=Number(document.getElementById('twelve').value);


var one1=Number(document.getElementById('Grade1').value);
var two2=Number(document.getElementById('Grade2').value);
var three3=Number(document.getElementById('Grade3').value);
var four4=Number(document.getElementById('Grade4').value);
var five5=Number(document.getElementById('Grade5').value);
var six6=Number(document.getElementById('Grade6').value);
var seven7=Number(document.getElementById('Grade7').value);
var eight8=Number(document.getElementById('Grade8').value);
var nine9=Number(document.getElementById('Grade9').value);
var ten10=Number(document.getElementById('Grade10').value);
var eleven11=Number(document.getElementById('Grade11').value);
var twelve12=Number(document.getElementById('Grade12').value);


if (one.length === 0) {

	window.alert(one);

}

if (one ==="" && two ==="" && three ==="" && four ==="" && five ==="" && six ==="" && seven ==="" && 
	eight ==="" && nine ==="" && ten ==="" && eleven ==="" && twelve ==="" ) {
window.alert("please enter some values to get things running fine for you!");
	return;


}


 
 totalUnit=one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve;
 totalGrade=(one * one1) + (two * two2) + (three * three3) + (four * four4) + (five * five5) + (six * six6) + 
(seven * seven7) + (eight * eight8) + (nine * nine9) + (ten * ten10) + (eleven * eleven11) + (twelve * twelve12);
var total=totalGrade  / totalUnit;
total=Math.round(total * 100) /100;
total=total.toFixed(2);
document.getElementById('totalGp').style.display="block";
document.getElementById('tip').innerHTML=total;
if (total <= 2) {
	document.getElementById('each').style.display="block";
document.getElementById('each').innerHTML="let us hope you have other plans than education, if not, you are realy walking on a precipix with your two eyes closed";

}
else if (total < 3.5) {
	document.getElementById('each').style.display="block";
document.getElementById('each').innerHTML="Hello dear danger looms";

}
else{
		document.getElementById('each').style.display="block";

	document.getElementById('each').innerHTML="you are good to go dear";

}

}
document.getElementById('totalGp').style.display="none";

document.getElementById('each').style.display="none";
document.getElementById('calculate').onclick=function(){ calculateTip(); }