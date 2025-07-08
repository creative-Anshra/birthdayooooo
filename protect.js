function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "mylove26") {
    window.location.href = "main.html"; // Redirect to your real birthday page
  } else {
    alert("❌ Wrong password. Try again.");
  }
}
