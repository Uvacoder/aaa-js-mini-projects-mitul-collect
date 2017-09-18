var filter = document.getElementById('lbsInput');
filter.addEventListener('input', weightFilter);

function weightFilter(e){
	let pounds = e.target.value;	document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
	document.getElementById('kgOutput').innerHTML = pounds/2.2046;	document.getElementById('ouncesOutput').innerHTML = pounds * 16;
}