const triggerMenu = document.getElementById("TriggerMenu");
console.log(triggerMenu);
triggerMenu.addEventListener("click", () => {
  const menu = document.getElementById("MenuMobile");
  menu.classList.toggle("hidden");
});
