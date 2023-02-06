{
  let guessNumber = 0;

  const createButtons = () => {
    let viewNumberButtons = [];
    const elementContenerButtons = document.querySelector(".js-buttons");

    for (i = viewNumberButtons.length; viewNumberButtons.length <= 8; i++) {
      let randomNumbers = Math.floor(Math.random() * 9) + 1;
      if (!viewNumberButtons.includes(randomNumbers)) {
        viewNumberButtons = [...viewNumberButtons, randomNumbers];
      }
    }

    let createButtonNumber = "";
    viewNumberButtons.map((number) => {
      createButtonNumber += `<button data-number="${number}" class="buttonNumber js-buttonClick">${number}</button>`;
    });

    elementContenerButtons.innerHTML = createButtonNumber;
  };

  const drawNumber = () => {
    const images = [
      "ananas",
      "brokuł",
      "grzybek",
      "kalafior",
      "kapusta",
      "marchewka",
      "pomidor",
      "truskawka",
      "winogrono",
    ];

    const viewImages = images[Math.floor(Math.random() * images.length)];

    const elementViewImages = document.querySelector(".js-images");
    guessNumber = Math.floor(Math.random() * 9) + 1;

    let createImages = "";
    for (i = 1; i <= guessNumber; i++) {
      createImages += `<img src="images/${viewImages}.png" class="picture">`;
    }

    elementViewImages.innerHTML = createImages;
  };

  const chceckWinn = (number) => {
    const winnButton = document.querySelector(
      `button[data-number="${number}"]`
    );

    if (guessNumber === number) {
      winnButton.classList.add("buttonNumberOK");
      setTimeout(() => {
        init();
      }, 4000);
    } else {
      winnButton.classList.add("buttonNumberError");
    }
  };

  const init = () => {
    createButtons();
    drawNumber();

    const elementButton = document.querySelectorAll(".js-buttonClick");
    for (const button of elementButton) {
      button.addEventListener("click", () => {
        chceckWinn(+button.getAttribute("data-number"));
      });
    }
  };

  init();
}
