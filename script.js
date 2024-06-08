const joke = document.querySelector(".joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/slack")
    .then((res) => res.json())
    .then((data) => {
      const newJoke = data.attachments[0].fallback;
      joke.innerText = newJoke;
    });
});
