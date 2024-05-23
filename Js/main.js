const data = fetch("192.")

const productContainer = document.querySelector("#product-container")

function uploadProducts () {

    productContainer.innerHTML = ""

    uploadProducts.forEach(product => {
        
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML = ``
    });

}