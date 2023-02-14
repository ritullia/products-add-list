console.log('veikia')


let baseURL = 'https://golden-whispering-show.glitch.me//'

async function sendData() {
	const img = document.getElementById("img-input").value;

	const price = document.getElementById("price-input").value;

	const title = document.getElementById("title-input").value;

	const dataToSend = {
		image: img,
		title: title,
		price: parseFloat(price.split(",").join(".")),

	};

	const response = await fetch(baseURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dataToSend),
	});

	if (response.ok === true) {
		alert('Produktas sėkmingai pridėtas');
		window.location.href = "./index.html"
	} else {
		alert('klaida')
	}
}

document
	.getElementById("add-product-button")
	.addEventListener("click", (event) => {
		event.preventDefault();
		sendData();

	});
