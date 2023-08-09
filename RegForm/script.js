const createOrderForm = document.getElementById("createOrderForm");
const statusButtons = document.querySelectorAll(".statusButton");
const statusButtonContainer = document.querySelector(".statusButtons");

const notificationContainer = document.getElementById("notificationContainer");
const logoutButton = document.getElementById("logoutButton");

checkAuthorization();

createOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = document.getElementById("address").value;
  const price = document.getElementById("price").value;
  const cost = document.getElementById("cost").value;

  sendOrder(address, price, cost);
});

statusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const status = button.dataset.status;
    showNotification("info", `Order ${status}`);
  });
});

logoutButton.addEventListener("click", () => {
  logout();
});

function checkAuthorization() {
  const user = getLoggedInUserFromLocalStorage();

  if (user) {
    createOrderForm.style.display = "block";
    statusButtons.forEach((button) => {
      button.style.display = "inline-block";
    });
    logoutButton.style.display = "inline-block";
  } else {
    createOrderForm.style.display = "none";
    statusButtons.forEach((button) => {
      button.style.display = "none";
    });
    logoutButton.style.display = "none";
  }
}

function getLoggedInUserFromLocalStorage() {
  if (localStorage.getItem("loggedIn")) {
    return { email: "test@example.com", password: "password" };
  }
  return null;
}

function sendOrder(address, price, cost) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      address,
      price,
      cost,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        statusButtonContainer.style.display = "block";
        showNotification("success", "Order created!");
      } else {
        showNotification("error", "Failed to create order.");
      }
    });
}

function logout() {
  localStorage.removeItem("loggedIn");
  checkAuthorization();
  showNotification("info", "You have logged out.");
}

function showNotification(type, message) {
  const notification = document.createElement("div");
  notification.classList.add("notification", type);
  notification.innerText = message;
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

const registrationButton = document.getElementById("registrationButton");
const loginButton = document.getElementById("loginButton");

registrationButton?.addEventListener("click", () => {
  window.location.href = "registration.html";
});

loginButton?.addEventListener("click", () => {
  window.location.href = "login.html";
});
