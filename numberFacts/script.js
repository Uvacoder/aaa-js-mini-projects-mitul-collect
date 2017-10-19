let fact     = document.getElementById('fact');
let factText = document.getElementById('factText');

let numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', getFactFetch);

// AJAX METHOD

/* function getFactAjax() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://numbersapi.com/'+number);

  xhr.onload = function() {
    if(this.status == 200 && number != '') {
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    }
  }
  xhr.send();
} */

// FETCH API METHOD

function getFactFetch() {
  let number = numberInput.value;

  fetch("http://numbersapi.com/"+number)
    .then(res => res.text())
    .then((data) => {
      if(number != '') {
        fact.style.display = 'block';
        factText.innerText = data;
      }
    })
    .catch(err => console.log("error!"));
}
