const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");


fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => {
  return response.json();
})
.then((kanap) => {
  console.log(kanap);
  return data(kanap);
});

//console.log("J'ai récuper l'id  " + id)
//soit faire un boucle, soit faire une  

function data(product) {
  
//affiche le produit sur la page produit
const itemimg = document.querySelector(".item__img");
const img = document.createElement("img");
itemimg.appendChild(img);
img.src = product.imageUrl;
img.textContent = product.altTxt


//marche!
//const itemtitle = document.querySelector(".item__content__titlePrice");
const h1 = document.querySelector("#title");
h1.textContent = product.name;

//

const p = document.querySelector("#price");
p.textContent = product.price;


const description = document.querySelector("#description");
description.textContent = product.description;

//couleur

let couleur = product.colors;

/*séléction direct de l'id colors et création de la balise option 
  pour le lié au donné pour afficher plusieurs choix de couleur*/
const choixCouleur = document.querySelector("#colors");
if (choixCouleur != null) {
  couleur.forEach((couleur) => {
    const option = document.createElement("option");
    option.value = couleur;
    option.textContent = couleur;
    choixCouleur.appendChild(option);
  });
};
//quantité ajout d'un event listene


///Event 

const bouton = document.querySelector("#addToCart");
const quantite = document.querySelector("#quantity").value;

if (bouton != null) {
  
  bouton.addEventListener("click", () => {
    const colors = document.querySelector("#colors").value;
    const quantite = document.querySelector("#quantity").value;


    if (colors == null || quantite <= 0 || quantite > 100 || colors == "") {
      alert("Veuillez choisir une couleur et une quantité maximum de 100 unités pour votre commande, Merci.");
      return bouton;
    }
    // let addId = "id:" + id +  "," + "quantite:" + quantite + "," + "color:" + `${colors}`;
    let addId =  id +  ","  + quantite +  "," + `${colors}`;
    alert("Article ajouté au panier");
    localStorage.setItem(id, JSON.stringify(addId));
       //redirection vers le pannier
      window.location.href = "cart.html";
  });
}
}



/*
  article = {id / color / qte}
  localstorage.key = "cart"
  localstorage.value = 
  [
    {id:, color:, qte:},
    {id:, color:, qte:},
  ]

  
  faire un eventlistener sur le bouton
  au click on recupére couleur et qte
  on verifie couleur existante != "" & que qte entre 1 et 100 inclus
  si tout est bon :
  on verifie si le localstorage n'existe pas, on créer une nouvelle liste ([]) et on y rajoute notre article
  si il existe deja, on cherche dedans si id+color sont identique:
  si on le trouve on incremente (avec test si sa dépasse aps 100)
  sinon on rajoute a la liste
  on met a jour le localstorage
*/