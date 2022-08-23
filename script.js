const closeIcon = document.querySelector(".fa-times");
const joke = document.querySelector(".joke");
const closeBtn = document.querySelector(".close");
const jokeModal = document.querySelector(".modal-sec");
const genJoke = document.querySelector(".gen-btn");
const apiURL = "http://api.icndb.com/jokes/random";

genJoke.addEventListener("click", showJoke);
closeBtn.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);

async function showJoke() {
  jokeModal.style.display = "block";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    joke.innerHTML = data.value.joke;
  } catch (error) {
    joke.innerHTML = error.message;
  }
}

function closeModal() {
  jokeModal.style.display = "none";
}
