document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  // Dummy credentials (for example purpose only)
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    errorMsg.textContent = "";
    // Redirect or continue logic here
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
