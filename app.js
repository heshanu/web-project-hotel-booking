
const carbtn=document.querySelector('.cart-btn');
const closeCartbtn=document.querySelector('.close-cart');
const clearCartbtn=document.querySelector('.clear-cart');
const cartDOM=document.querySelector('.cart');
const cartOverlay=document.querySelector('.cart-overlay');
const cartItems=document.querySelector('.cart-items');
//const cartTotal = document.querySelector('.cart-btn');
const cartTotal=document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

let cart=[];
class Products{
    async getProducts(){
        try {
            let result = await fetch("products.json"); 
            let data=await result.json();
            return data;         
        } catch (error) {
            console.log(error);
        }
    }
}
//display products
class UI{

}

class Storage{

}

document.addEventListener("DOMContentLoaded",()=>{
    const ui=new UI();
    const products=new Products();
//get all 
products.getProducts().then(data=>console.log(data));
});


