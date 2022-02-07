function toggle() {
  var remove = document.querySelector(".toggle-button");
  var removeBadge = document.querySelector(".icon-badge-number");
  if (removeBadge.style.display === "none") {
    removeBadge.style.display = "flex";
  } else {
    removeBadge.style.display = "none";
  }
}
