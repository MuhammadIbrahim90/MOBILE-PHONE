const cart = localStorage.getItem("cartList");
console.log(JSON.parse(cart));
const mobilePhones = JSON.parse(cart);

const div = document.querySelector(".cartContainer");
const p = document.querySelector('.cartTotal'); // Assuming you have an element with the class "cartTotal"
var totalAmount = 0;

for (let i = 0; i < mobilePhones.length; i++) {
    var pri = mobilePhones[i].price * mobilePhones[i].quantity;
    totalAmount = totalAmount + pri;

    div.innerHTML += `<div class="card">
        <img class="boximg" src="${mobilePhones[i].image}" alt="">
        <h3 class="mobName">${mobilePhones[i].name}</h3>
        <p>brand : ${mobilePhones[i].brand}</p>
        <p>${mobilePhones[i].specifications.storage}</p>
        <p>Rs: ${mobilePhones[i].price}/-</p>
        <p>quantity  :  ${mobilePhones[i].quantity}</p>
        <p> Total price: ${mobilePhones[i].price * mobilePhones[i].quantity}/-</p>
    </div>`;
}

console.log(totalAmount);

// Display the total amount
p.textContent = `Total Amount : ${totalAmount}/-`;
