let token = localStorage.getItem("token");

if (token == null || token == undefined) {
  window.location.replace("/login")
}