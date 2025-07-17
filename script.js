console.log("Chowking Page Loaded");

const orderBtn = document.getElementById('orderNowBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', function () {
    window.location.href = "login.html";
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

let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
if (addToCartButtons.length > 0) {
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const menuItem = this.closest('.menu-item');
      const itemName = menuItem.dataset.name;
      const itemPrice = parseFloat(menuItem.dataset.price);

      const existingItemIndex = cart.findIndex(item => item.name === itemName);

      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
      }

      alert(`${itemName} added to cart!`);
      console.log('Current Cart:', cart);
    });
  });
}

const viewCartButton = document.getElementById('viewCartBtn');
if (viewCartButton) {
  viewCartButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    let cartContents = "Your Shopping Cart:\n\n";
    let total = 0;
    cart.forEach(item => {
      cartContents += `${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toFixed(2)}\n`;
      total += item.price * item.quantity;
    });
    cartContents += `\nTotal: ₱${total.toFixed(2)}`;

    alert(cartContents);
  });
}

const placeOrderButton = document.getElementById('placeOrderBtn');
if (placeOrderButton) {
  placeOrderButton.addEventListener('click', function() {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    let orderSummary = "Order Confirmed!\n\n";
    let total = 0;
    cart.forEach(item => {
      orderSummary += `${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toFixed(2)}\n`;
      total += item.price * item.quantity;
    });
    orderSummary += `\nTotal: ₱${total.toFixed(2)}\n\nThank you for your order!`;

    alert(orderSummary);

    cart = [];
    console.log('Cart cleared after order:', cart);
  });
}