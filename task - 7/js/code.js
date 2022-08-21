const input = document.getElementById('value-input');
const button = document.getElementById('button');
const ol = document.getElementById('list')
const li = document.querySelectorAll('li')


input.addEventListener('input', (event) => {
	if (input.value === '') {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
	
})

button.addEventListener('click', (event) => {
	if (input.value != '') {
		let liLast = document.createElement('li');
		liLast.innerHTML = `${input.value}`
		ol.append(liLast);
	} else if (input.value === '') {
		button.disabled = true
	}
this.disabled = true
});

ol.onclick = () => {
	alert(`${event.target.innerHTML}`);
}