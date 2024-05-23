export const dwData = async() => {
    let data = await fetch("192.0.12:5501").then(response => response.json())
    // let abrigos = await fetch("192.0.12:5501/abrigos").then(response => response.json())
    // let camisetas = await fetch("192.0.12:5501/camisetas").then(response => response.json())
    // let pantalones = await fetch("192.0.12:5501/pantalones").then(response => response.json())
    // let carrito = await fetch("192.0.12:5501/carrito").then(response => response.json())
    return data
}