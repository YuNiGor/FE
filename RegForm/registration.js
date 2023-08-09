const registrationForm = document.getElementById("registrationForm");
const notificationContainer = document.getElementById("notificationContainer");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const existingUser = getUserByEmail(email);

  if (existingUser) {
    showNotification("error", "User already exists");
  } else {
    const userData = {
      email,
      password,
    };
    saveUser(userData);
    registrationForm.reset();
    showNotification("success", "Registration successful");
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

function getUserByEmail(email) {
  const users = getUsers();
  return users.find((user) => user.email === email);
}

function getUsers() {
  const usersString = localStorage.getItem("users");
  return usersString ? JSON.parse(usersString) : [];
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}
