console.log("Chowking Page Loaded");

const orderBtn = document.getElementById('orderNowBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', function () {
    alert('Redirecting to login...');
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
