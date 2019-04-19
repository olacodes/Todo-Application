// UI Elements

const form 		= document.querySelector("form"),
	  ul 		= document.querySelector("ul"),
	  input 	= document.querySelector("form input"),
	  addTodo 	= document.querySelector(".add-todo"),
	  clearAll 	= document.querySelector(".clear-all"),
	  message   = document.querySelector(".message")




form.addEventListener("submit", function(e) {
	e.preventDefault();
	const inputTextValue = e.target.elements.inputText.value;

	if (inputTextValue === "") {
		messages()
	}else{
			// Create li Element
		const li = document.createElement("li");
		li.className = "list-group-item mb-1";
		li.style = "text-decoration: none"
		li.appendChild(document.createTextNode(inputTextValue));

		// Add delete Button
		const span = document.createElement("span");
		span.className = "btn btn-danger btn-sm";
		span.style = "float: right";
		span.textContent = "X"
		

		// Append LI to DelBtn
		li.appendChild(span);

		// Append li to ul
		ul.appendChild(li);

		// Clear input Text
		input.value = "";

		// Show Clear All Button 
		if (ul.childElementCount >= 3) {
			clearAll.style.display = "inline"
		}else{
			clearAll.style.display = "none"
		}
	}
});

function messages() {
	message.innerText = "Please enter Todo!",
	setTimeout(() => {
		message.innerText = "";
	}, 3000);
}
// Toggle the input Box
addTodo.addEventListener("click", function() {
	if (input.style.display === "none") {
		input.style.display = "inline"
	}else{
		input.style.display = "none"
	}
	
});

ul.addEventListener("click", function(e) {
	
	if(e.target.parentElement.classList.contains("list-group-item")){
		e.target.parentElement.remove()
	}
	
	if (e.target.style.textDecoration === "none") {
		(e.target.style.textDecoration = "line-through");
	}else{
		(e.target.style.textDecoration = "none");
	}
});

clearAll.addEventListener("click", (() => {
	ul.innerHTML = "";	
	clearAll.style.display = "none"
}))
