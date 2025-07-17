console.log("Chowking Page Loaded");

let cart = [];

const orderBtn = document.getElementById('orderNowBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', function () {
    alert('Redirecting to login/menu...');
    window.location.href = "login.html"; // Or "menu.html" if you want to skip login
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email && password) {
      alert(`Logging in as: ${email}`);
      window.location.href = "menu.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function () {
    const menuItem = this.closest('.menu-item');
    const itemName = menuItem.dataset.name;
    const itemPrice = parseFloat(menuItem.dataset.price);

    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to cart!`);
    console.log("Current Cart:", cart);
  });
});

const viewCartBtn = document.getElementById('viewCartBtn');
if (viewCartBtn) {
  viewCartBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    let cartContents = "Items in your cart:\n";
    let totalPrice = 0;
    cart.forEach((item, index) => {
      cartContents += `${index + 1}. ${item.name} - ₱${item.price.toFixed(2)}\n`;
      totalPrice += item.price;
    });
    cartContents += `\nTotal: ₱${totalPrice.toFixed(2)}`;

    alert(cartContents);
  });
}

const placeOrderBtn = document.getElementById('placeOrderBtn');
if (placeOrderBtn) {
  placeOrderBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    let orderSummary = "Order placed!\n";
    let totalPrice = 0;
    cart.forEach((item, index) => {
      orderSummary += `${index + 1}. ${item.name} - ₱${item.price.toFixed(2)}\n`;
      totalPrice += item.price;
    });
    orderSummary += `\n\nThank you for your order!`;

    alert(orderSummary);

    cart = [];
    console.log("Cart cleared after order:", cart);
  });
}
