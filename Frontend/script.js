function handleSubmit(event) {
	event.preventDefault();

	let studentName = document.getElementById("name").value;
	let studentAge = document.getElementById("age").value;

	document.getElementById("output").innerText = "Name: " + studentName + ", Age: " + studentAge;
}