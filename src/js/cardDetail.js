"use strict"

const desperationCard = document.querySelector(".js-desperation-result");
const imageCard = document.querySelector(".js-img-result");
const textCard = document.querySelector(".js-txt-result");
const authorCard = document.querySelector(".js-author-result");

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
      const targetData = data.data;
      console.log(targetData);
    desperationCard.innerHTML += targetData.field1;
    imageCard.src=targetData.photo;
    textCard.innerHTML = targetData.field2;
    authorCard.innerHTML = targetData.field3;
    })