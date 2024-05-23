// import { dwData } from "./modulos/dwData.js";
const dwData = async() => {
    let data = await fetch("192.0.12:5501").then(response => response.json())
    return data
}

data = dwData()

const productContainer = document.querySelector("#product-container")

function uploadProducts () {

    productContainer.innerHTML = ""

    products.forEach(product => {
        for(const categoria in data){
            if (categoria !== 'carrito'){
                for (const product of data[categoria]){
                    const div = document.createElement("div")
                div.classList.add("product")
                div.innerHTML = `
                    <img class="product-img" src="${product.imagen}" alt="Abrigo01">
                    <div class="product-details">
                        <div class="product-tittle">${product.nombre}</div>
                        <p class="product-price">$${product.precio}</p>
                        <button class="product-add" id="${product.id}">Agregar</button>
                    </div>
                `

                productContainer.append(div)
                }
            }
        }
        
    });

}

uploadProducts()
// const buttonsMenu = document.querySelectorAll(".button-catgory");
// const mainTitlle = document.querySelector("#main-tittle");
// let addButtons = document.querySelectorAll(".product-add");
// const countingCart = document.querySelector("#countin-cart")



// function uploadProducts(chooseProduct){

//     productGallery.innerHTML="";
    
//     chooseProduct.forEach(product=>{
//         const div = document.createElement("div");
//         div.classList.add("product")
//         div.innerHTML = `
//             <img class="product__img" src="${product.imagen}" alt="">
//             <div class="product__description">
//                 <h3 class="product__tittle">${product.nombre}</h3>
//                 <p class="product__cost">$${product.precio}</p>
//                 <button class="product__add" id="${product.id}">Agregar</button>
//             </div>
//         `;
//         productGallery.append(div);
//     })
//     updateButtonsAdd();
// }

// uploadProducts(products);

// buttonsMenu.forEach(button => {
//     button.addEventListener("click",(e) =>{
//         buttonsMenu.forEach(button => button.classList.remove("active"))
//         e.currentTarget.classList.add("active");

//         if (e.currentTarget.id != "all") {
//             const category = products.find(product => product.categoria.id === e.currentTarget.id)
//             mainTitlle.innerText = category.categoria.nombre;
//             const chooseProduct = products.filter(product => product.categoria.id === e.currentTarget.id);
//             uploadProducts(chooseProduct);
//         }
//         else{
//             mainTitlle.innerText = "Todos los productos."
//             uploadProducts(products);
//         }
        
//     })
// })

// function updateButtonsAdd() {
//     addButtons=document.querySelectorAll(".product__add");
    
//     addButtons.forEach(button => {
//         button.addEventListener("click", addCart)
//     })
// }

// // let productsCart;
// // const productsCartLS= JSON.parse(localStorage.getItem("productsInCart"));
// // if (productsCart){
// //     productsCart=productsCartLS;
// //     updateCounting();
// // }
// productsCart=[];

// function addCart(e) {
//     const idButton = e.currentTarget.id;
//     const productAdd = products.find(product => product.id === idButton);
//     if (productsCart.some(product => product.id === idButton)){
//         const index = productsCart.findIndex(product => product.id === idButton);
//         productsCart[index].cantidad++;
//     }
//     else{
//         productAdd.cantidad = 1
//         productsCart.push(productAdd);
//     }
//     updateCounting();
    
//     localStorage.setItem("productsInCart", JSON.stringify(productsCart))
// }
// function updateCounting(){
//     let newCounting = productsCart.reduce((acc, product) => acc + product.cantidad, 0);
//     countingCart.innerText = newCounting;
// }