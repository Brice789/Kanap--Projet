const cart = [];
getIdsFromCache() 




function getIdsFromCache() {
  const numberOfProducts = localStorage.length
  const ids = []
  for (let i = 0; i < numberOfProducts; i++) {
    const key = localStorage.key(i);
    const id = key.split("-")[0];
    ids.push(id);
    fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((kanap) => {
      console.log(kanap);
      return data(kanap);
    });
  }
  console.log(ids);
  return ids;
}

function data(product){
  const article = document.createElement("article");
  article.classList.add("card__item");
 //article.dataset.id = key.id; 
  article.dataset.color = product.color;
  article.dataset.price = product.price;
  article.dataset.name = product.name;
  article.dataset.quantity = product.quantity;

  console.log("le prix est " + article.dataset.price);

  const div = document.createElement("div");
  div.classList.add("cart__item__img");
  article.dataset.id = product.id;

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.altTxt;

  const div2 = document.createElement("div");
  div2.classList.add("cart__item__content");

  const div3 = document.createElement("div");
  div2.classList.add("cart__item__content__description");

  const h2 =  document.createElement("h2");
  h2.textContent = product.name;
  h2.classList.add("productName");


  const p =  document.createElement("p");
  p.textContent = product.color;
  console.log("la couleur est " + p.textContent);
  p.classList.add("Couleur");

  const p2 =  document.createElement("p2");
  p2.textContent ="    " +   product.price + "  $";
  p2.classList.add("Prix");

  div3.appendChild(h2);
  div3.appendChild(p2);
  div3.appendChild(p);

  div2.appendChild(div3);
  article.appendChild(div);
  div.appendChild(image);
  
  article.appendChild(div2);

  child(article);

  // child (article, div, image);
}


function child(article){
  const items = document.querySelector("#cart__items");
  items.appendChild(article);
}



// <div class="cart__item__content">
// <div class="cart__item__content__description">
//   <h2>Nom du produit</h2>
//   <p>Vert</p>
//   <p>42,00 €</p>
// </div>


// function retrieveItemsFromCache() {
//   const numberOfItems = localStorage.length
//   for (let i = 0; i < numberOfItems; i++) {
//     const item = localStorage.getItem(localStorage.key(i)) || "" 
//     const itemObject = JSON.parse(item)
//     cart.push(itemObject)
//     const itemsplit = itemObject.split();
//    // console.log("retrive item for cache " + item )
//     //console.log("ma carte est" + cart);
//    // console.log("mon item est  " + itemsplit);
//   }
//   //console.log(cart.length);
// }