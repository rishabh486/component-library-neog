function showSnackbar() {
  var snackBar = document.getElementById("snackbar-message");
  snackBar.className = "show-bar";
}
function hideSnackbar() {
  var hide = document.querySelector(".snack-exit");
  var show = document.querySelector("#snackbar-message");
  show.className = "hide-snack";
}
function showSnackbarLeft() {
  var snackBar = document.getElementById("snackbar-message-left");
  snackBar.className = "show-bar";
}
function hideSnackbarLeft() {
  var hide = document.querySelector(".snack-exit");
  var show = document.querySelector("#snackbar-message-left");
  show.className = "hide-snack";
}
function showSnackbarCenter() {
  var snackBar = document.getElementById("snackbar-message-center");
  snackBar.className = "show-bar";
}
function hideSnackbarCenter() {
  var hide = document.querySelector(".snack-exit");
  var show = document.querySelector("#snackbar-message-center");
  show.className = "hide-snack";
}
