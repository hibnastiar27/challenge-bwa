document.querySelectorAll(".password-input").forEach((input) => {
  input.addEventListener("input", function () {
    this.setAttribute("type", "text");
    this.value = "*".repeat(this.value.length);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
      this.setAttribute("type", "text");
    }
  });
});
