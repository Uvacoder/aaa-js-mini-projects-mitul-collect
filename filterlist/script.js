// Get input element & add EL 
let filterInput = document.getElementById('filter');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// get value
	let filterValue = document.getElementById('filter').value.toUpperCase();
	
}