const params = new URLSearchParams(window.location.search);
const product = params.get("products");



const products = {

    roses: {
          
        name: "Red Roses",
        image: "Images/RedRose.jpeg",
        description: "Beautiful fresh red roses for special moments.",
        price: "R350"

    },


    tulips: {
          
        name: "Colorful Tulips",
        image: "Images/Tulips.jpeg",
        description: "Bright and colorful tulips for special moments.",
        price: "R280"

    },


    sunflower: {
          
        name: "Sunflower",
        image: "Images/Sunflower.jpg",
        description: "Cheerful sunflowers to brigthen any occasion.",
        price: "R300"

    }



};



const productName = document.getElementById("product-name");

         productName.textContent = products[product].name;



const productImage = document.getElementById("product-image");

         productImage.src = products[product].image;


const productDescription = document.getElementById("product-description");
   
        productDescription.textContent = products[product].description;


const productPrice = document.getElementById("product-price");
         
       productPrice.textContent = "Price: " + products[product].price;



const addToCartButton = document.getElementById("add-to-cart");


addToCartButton.addEventListener("click", function(){

     localStorage.setItem("cartProduct", product);
     console.log(localStorage.getItem("cartProduct"));

});

      


//console.log(products);
console.log(productName);
console.log(productDescription);
console.log(productPrice);
console.log(addToCartButton)