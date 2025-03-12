const cardButton = document.querySelector(".js-share-button");
const linkCard = document.querySelector(".js-share-link");
const shareResult = document.querySelector(".js-share-result");
const whatsapp = document.querySelector(".js-whatsapp");

const handleCreateCard = (event) => {
  event.preventDefault();

  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      const idCard = data.infoID;
      shareResult.classList.remove("collapsed");
      linkCard.href = `./result.html?id=${idCard}`;
      whatsapp.href += `./result.html?id=${idCard}`
    });
};

cardButton.addEventListener("click", handleCreateCard);
