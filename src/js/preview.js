/*
Seleccionamos los telementos de HTMl que utilizamos
   -las constantes están en collapsables.js y son: fillBox, designBox y shareBox
Seleccionar los elementos donde vamos a añadir el valor de los inputs. En este caso son : imagen, nivel desesperación, frase y el autor.
Cuando la usuaria escriba los inputs: 
    si el input es "Name" añadir el valor a su caja de la imagen
    y así con todos.
*/

const previewImg = document.querySelector(".js-img-preview");
const previewDesperation = document.querySelector(".js-desperation-preview");
const previewTxt = document.querySelector(".js-txt-preview");
const previewAuthor = document.querySelector(".js-author-preview");

function getPreview(event) {
    if (event.target.id === "image") {
        previewImg.innerHTML = event.target.value;
    } else if (event.target.id === "desperation") {
        previewDesperation.innerHTML = event.target.value;
    } else if (event.target.id === "sentence") {
        previewTxt.innerHTML = event.target.value;
    } else if (event.target.id === "author") {
        previewAuthor.innerHTML = event.target.value;
    }
}
fillBox.addEventListener("input", getPreview);