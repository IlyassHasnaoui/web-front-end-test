console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfuly');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const rubberDuck = document.querySelector('img');

rubberDuck.addEventListener('mouseover', function() {
	alert('Quack Quack!');
})
