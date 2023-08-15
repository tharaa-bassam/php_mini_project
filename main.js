document.getElementById("loginform").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ 
      
      password: password
      , email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
