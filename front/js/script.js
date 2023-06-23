fetch("http://localhost:3000/api/products")
.then((response) => {
  return response.json();
})
.then((kanap) => {
  console.log(kanap);
  return data(kanap);
});




function data(array) {
  array.forEach((array) => {
   const balisea =  document.createElement("a");
   const id = array._id ;
   balisea.href = "./product.html?id=" + id;
   const article =  document.createElement("article");
   const img =  document.createElement("img");
   img.src = array.imageUrl;
   img.alt = array.description;
   const h3 =  document.createElement("h3");
   h3.textContent = array.name;
   h3.classList.add("productName");
   const p =  document.createElement("p");
   p.textContent = array.description;
   p.classList.add("productDescription");
   child(balisea, article, img, h3, p);
  });
}



function child(balisea, article, img, h3, p){
  const items = document.querySelector("#items");
  //const items = document.getElementById("#items");
  //const items = document.getElementById("items");
  items.appendChild(balisea);
  balisea.appendChild(article);
  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p);
  //return child(balisea, article, img, h3, p)
}




