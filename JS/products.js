const params = new URLSearchParams(window.location.search);
const product = params.get("products");



const products = {

    roses: {
          
        name: "Red Roses",
        image: "Images/RedRose.jpeg",
        price: "R350"

    },


    tulips: {
          
        name: "Colorful Tulips",
        image: "Images/Tulips.jpeg",
        price: "R280"

    },


    sunflower: {
          
        name: "Sunflower",
        image: "Images/Sunflower.jpg",
        price: "R300"

    },



};



const productName = document.getElementById("product-name");

productName.textContent = products[product].name;





//console.log(products);
console.log(productName);