function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);
function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
