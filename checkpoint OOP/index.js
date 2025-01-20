/*
class vehicle {
    constructor(price, year, make, model) {
        this.price = price;
        this.year = year;
        this.make = make;
        this.model = model;
    }
    
}

class engine extends vehicle {
    constructor(price, year, make, model, color, country) {
        super(price, year, make, model);
        this.color = color
        this.country = country;
        
    }
}


let car = new engine( "$10,000", "2019", "Toyota", "Camry", "Red", "USA");

console.log(car.color)
*/


// Create an object class for the product to store the properties for id, name and price of the product.

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Create an object class for the shopping cart item to store the properties for product and its quantity.
class shoppingCartItem {
    constructor(Product, quantity) {
        this.Product = Product;
        this.quantity = quantity;
        
    }
// To the preceding object class, add the method to calculate the total price of the item.
totalPrice(){
    return this.Product.price * this.quantity;
}
}

// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class shoppingCart {
    constructor() {
        this.items = [];
        }
// Method to add items to the cart
        getTotal(){
            return this.items.reduce((total, item) => total + item.totalPrice(), 0);
        }
addItem(product,quantity){
const existingItem = this.items.find(item => item.Product.id === product.id);
if(existingItem){
    existingItem.quantity += quantity;
}else{
    this.items.push(new shoppingCartItem(product, quantity));
}
}
// Method to remove an item from the cart
removeItem(productId){
    this.items = this.items.filter(item => item.Product.id !== productId);
}
displayCart(){
this.items.forEach(items => {
    console.log(`${items.Product.name}-${items.quantity}x $${items.Product.price} = $${items.totalPrice()}`);
});
}
}

// Create some products
const basket = new Product(1, "Basket", 100);
const socks = new Product(2, "Socks", 20);
const bag = new Product(3, "Bag", 50);

// Create a shopping cart
const carts = new ShoppingCart();

// Add items to the cart
cart.addItem(basket, 2);  // 2 Baskets
cart.addItem(socks, 3);   // 3 Socks
cart.addItem(bag, 1);     // 1 Bag

// Display the cart
console.log("Cart items:");
carts.displayCart();  // Display the items in the cart

// Get the total price
console.log(`Total price: $${carts.getTotal()}`);

// Remove an item from the cart
carts.removeItem(basket.id);  // Remove Basket

// Display the updated cart
console.log("Updated cart items:");
carts.displayCart();  // Display the updated items in the cart
console.log(`Total price: $${carts.getTotal()}`);

const cart = new shoppingCart();

// Assuming you are inside the DOM manipulation function
document.querySelectorAll('.fa-plus-circle').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.closest('.card-body');
    const productName = productElement.querySelector('.card-title').textContent;
    const productPrice = parseFloat(productElement.querySelector('.unit-price').textContent.replace(' $', ''));
    
    const product = new Product(Date.now(), productName, productPrice);  // Create a product based on data
    cart.addItem(product, 1);  // Add 1 item to the cart

    // Update the total price
    document.querySelector(".total").textContent = `${cart.getTotal()} $`;
  });
});


