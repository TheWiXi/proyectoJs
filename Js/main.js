// PRODUCTOS
const products = [
    // Abrigos
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Azul'",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_787280-MCO51843885132_102022-F.webp",
        "precio": 93900,
        "id": "abrigo-01",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Negro'",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_904140-MCO51843801912_102022-F.webp",
        "precio": 93900,
        "id": "abrigo-02",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Blanco'",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",
        "precio": 93900,
        "id": "abrigo-03",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Hombre Cuero Sintético",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",
        "precio": 102000,
        "id": "abrigo-04",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_829630-MCO31080337339_062019-F.webp",
        "precio": 77900,
        "id": "abrigo-05",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    // Camisetas
    {
        "nombre": "Camiseta De Compresión En Licra Uv Slim.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_906094-MCO53976036500_022023-F.webp",
        "precio": 38000,
        "id": "Camiseta 01",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Tipo Polo Color Dama Mujer.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_649847-MCO43854241255_102020-F.webp",
        "precio": 26255,
        "id": "Camiseta 02",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_995623-MCO70722158553_072023-F.webp",
        "precio": 29900,
        "id": "Camiseta 03",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camisetas Bandas De Rock Metal Heavy Riffs.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_776916-MCO72088562654_102023-F.webp",
        "precio": 32850,
        "id": "Camiseta 04",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_968038-MCO53410409233_012023-F.webp",
        "precio": 29900,
        "id": "Camiseta 05",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    // Pantalones
    {
        "nombre": "Pantalon En Dril Licrado Para Hombre.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_731406-MCO42646277112_072020-F.webp",
        "precio": 58900,
        "id": "Pantalón 01",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Camuflado Hermoso.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_795748-MCO70527773883_072023-F.webp",
        "precio": 104405,
        "id": "Pantalón 02",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Jogger Cargo, Táctico, Militar.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_758206-MCO70501309390_072023-F.webp",
        "precio": 104500,
        "id": "Pantalón 03",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Jeans De Colores Entubado Para Hombre.",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_947436-MCO69626235546_052023-F.webp",
        "precio": 61750,
        "id": "Pantalón 04",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalon Camuflado, De Bolsillos 100% Dreal",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_618657-MCO69523195685_052023-F.webp",
        "precio": 89990,
        "id": "Pantalón 05",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        }
    }
];

const productGallery = document.querySelector("#product__gallery");
const buttonsMenu = document.querySelectorAll(".category__button");
const mainTitlle = document.querySelector("#main__tittle");
let addButtons = document.querySelectorAll(".product__add");
const countingCart = document.querySelector("#counting__cart")



function uploadProducts(chooseProduct){

    productGallery.innerHTML="";
    
    chooseProduct.forEach(product=>{
        const div = document.createElement("div");
        div.classList.add("product")
        div.innerHTML = `
            <img class="product__img" src="${product.imagen}" alt="">
            <div class="product__description">
                <h3 class="product__tittle">${product.nombre}</h3>
                <p class="product__cost">$${product.precio}</p>
                <button class="product__add" id="${product.id}">Agregar</button>
            </div>
        `;
        productGallery.append(div);
    })
    updateButtonsAdd();
}

uploadProducts(products);

buttonsMenu.forEach(button => {
    button.addEventListener("click",(e) =>{
        buttonsMenu.forEach(button => button.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "all") {
            const category = products.find(product => product.categoria.id === e.currentTarget.id)
            mainTitlle.innerText = category.categoria.nombre;
            const chooseProduct = products.filter(product => product.categoria.id === e.currentTarget.id);
            uploadProducts(chooseProduct);
        }
        else{
            mainTitlle.innerText = "Todos los productos."
            uploadProducts(products);
        }
        
    })
})

function updateButtonsAdd() {
    addButtons=document.querySelectorAll(".product__add");
    
    addButtons.forEach(button => {
        button.addEventListener("click", addCart)
    })
}

// let productsCart;
// const productsCartLS= JSON.parse(localStorage.getItem("productsInCart"));
// if (productsCart){
//     productsCart=productsCartLS;
//     updateCounting();
// }
productsCart=[];

function addCart(e) {
    const idButton = e.currentTarget.id;
    const productAdd = products.find(product => product.id === idButton);
    if (productsCart.some(product => product.id === idButton)){
        const index = productsCart.findIndex(product => product.id === idButton);
        productsCart[index].cantidad++;
    }
    else{
        productAdd.cantidad = 1
        productsCart.push(productAdd);
    }
    updateCounting();
    
    localStorage.setItem("productsInCart", JSON.stringify(productsCart))
}
function updateCounting(){
    let newCounting = productsCart.reduce((acc, product) => acc + product.cantidad, 0);
    countingCart.innerText = newCounting;
}