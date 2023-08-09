const loginForm = document.getElementById("loginForm");
const notificationContainer = document.getElementById("notificationContainer");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = getUserFromLocalStorage(email, password);

  if (user) {
    authorizeUser();
    showNotification("success", "Successful login!");
    window.location.href = "index.html";
  } else {
    showNotification("error", "Login failed. Check email and password.");
  }
});

function showNotification(type, message) {
  const notification = document.createElement("div");
  notification.classList.add("notification", type);
  notification.innerText = message;
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getUserFromLocalStorage(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    (user) => user.email === email && user.password === password
  );
}

function authorizeUser() {
  localStorage.setItem("loggedIn", "true");
}
