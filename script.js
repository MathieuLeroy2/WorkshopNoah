const button = document.querySelector("#message-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Small changes become more useful when a team can share and check them.";
});