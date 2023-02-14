console.log("veikia");

// fetch(baseURL + "/1", {
//     method: "DELETE",
// });

// Base URL = https://golden-whispering-show.glitch.me//
// 1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę)://https://images.prismic.io/cao-lessons/e4ee1e0a-c959-4fee-8644-e6dfc33c1232_Screen+Shot+2021-06-16+at+12.04.04+PM.png?auto=compress,format
//2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.//https://images.prismic.io/cao-lessons/7f7e2a10-ed5b-4cf4-bf5f-141f6c7d309b_Screen+Shot+2021-06-16+at+12.05.42+PM.png?auto=compress,format
//3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).
//4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.

let baseURL = "https://golden-whispering-show.glitch.me//";

let data;

fetch(baseURL)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    data = result; //susigrazinam kintamaji
    drawCards(result); // paleidziame funkcija i fetch duomen pasiemimui
  })
  .catch((error) => console.error(error));

function drawCards(dataArr) {
  let mainCard = document.getElementById("products-wrapper");

  dataArr.forEach((data) => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    let image = document.createElement("img");
    image.src = data.image;
    image.classList.add("product-img");

    let productText = document.createElement("div");
    productText.classList.add("products-text-wrapper");

    let title = document.createElement("p");
    title.classList.add("title-text");
    title.textContent = data.title;

    let price = document.createElement("h3");
    price.classList.add("price-wrapper");
    price.textContent = data.price + ` €`;

    let delBtnDiv = document.createElement("div");
    delBtnDiv.classList.add("button-wrapper");
    let delBtn = document.createElement("button");
    delBtn.classList.add("btn-delete");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      fetch(baseURL + "/" + data.id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          alert(result);
          location.reload();
        })

        .catch((error) => console.error(error));
      // card.remove()
    });

    delBtnDiv.append(delBtn);
    console.log(data.id);

    productText.append(title, price, delBtnDiv);

    card.append(image, productText);

    mainCard.append(card);
  });
}

document.getElementById("add-product").addEventListener("click", () => {
  window.location.href = "addproduct.html";
});
