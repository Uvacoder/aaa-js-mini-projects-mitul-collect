// Get input element & add EL 
let filterInput = document.getElementById('filter');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// get value
	let filterValue = document.getElementById('filter').value.toUpperCase();
	
	// get names Ul
	let ul = document.getElementById('name');
	// get li's from ul
	let li = ul.querySelectorAll('li.collection-item');
	
	// loop thru collection item li
	for(let i = 0; i < li.length; i++){
		let a = li[i].getElementsByTagName('a')[0];
		// if it matches correct
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
	
}