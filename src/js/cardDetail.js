'use strict';

const desperationCard = document.querySelector(".js-desperation-result");
const imageCard = document.querySelector(".js-img-result");
const textCard = document.querySelector(".js-txt-result");
const authorCard = document.querySelector(".js-author-result");

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

fetch(`https://dev.adalab.es/api/info/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const targetData = data.data;

    desperationCard.innerHTML += targetData.field1;

    imageCard.src = targetData.photo;

    authorCard.innerHTML = targetData.field3.toUpperCase();

    if (targetData.field2 === "select") {
      textCard.innerHTML = "Selecciona tu frase";
    } else if (targetData.field2 === "process") {
      textCard.innerHTML = "Confía en el proceso";
    } else if (targetData.field2 === "reverse") {
      textCard.innerHTML = "Me siento un poco column-reverse";
    } else if (targetData.field2 === "crying") {
      textCard.innerHTML = "Crying in JavaScript";
    }

    if (targetData.field4 === "small") {
      textCard.classList.add("smallSize");
      textCard.classList.remove("mediumSize", "bigSize");
    } else if (targetData.field4 === "medium") {
      textCard.classList.add("mediumSize");
      textCard.classList.remove("smallSize", "bigSize");
    } else if (targetData.field4 === "big") {
      textCard.classList.add("bigSize");
      textCard.classList.remove("mediumSize", "smallSize");
    }

    if (targetData.field5 === "option1") {
      textCard.classList.add("color1");
      desperationCard.classList.add("background1");
      textCard.classList.remove("color2", "color3");
      desperationCard.classList.remove("background2", "background3");
    } else if (targetData.field5 === "option2") {
      textCard.classList.add("color2");
      desperationCard.classList.add("background2");
      textCard.classList.remove("color1", "color3");
      desperationCard.classList.remove("background1", "background3");
    } else if (targetData.field5 === "option3") {
      textCard.classList.add("color3");
      desperationCard.classList.add("background3");
      textCard.classList.remove("color1", "color2");
      desperationCard.classList.remove("background1", "background2");
    }
  })
  .catch((error) => console.error("Error en la petición:", error));
