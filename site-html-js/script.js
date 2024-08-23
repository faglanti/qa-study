document.getElementById('super_button').addEventListener('click', function(){document.querySelector('p').textContent = 'JS is working!'; document.body.style.backgroundColor = 'yellow';});

document.getElementById('t-button'), addEventListener('click', function(){let uinput = document.getElementById('uinput').value; console.log(uinput);});

// Change list in DevTools console
// let listItems = document.querySelectorAll('ul li'); for(let i = 0; i < listItems.length; i++) {listItems[i].textContent = 'Element ' + (i + 1); if (i % 2 == 0) {listItems[i].style.color = 'green';}}

function summa(a, b) {return a + b;}
document.getElementById('sum-button'), addEventListener('click', function(){
	let num1 = parseFloat(document.getElementById('nu1').value);
	let num2 = parseFloat(document.getElementById('nu2').value);
	let result = summa(num1, num2);
	document.getElementById('result').textContent = 'Result: ' + result;
});


