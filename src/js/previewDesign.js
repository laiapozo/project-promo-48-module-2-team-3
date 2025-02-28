/*
    Tamaño letra:
    - Seleccionar elementos HTML: input tamaño letra y preview de la frase
    - Crear clases según opciones con los tamaños
    - Cuando usuaria elija input del tamaño:
        - si escoge letra pequeña --> Le damos a la preview de la frase la clase .smallSize y quita las otra dos
        - si escoge letra mediana --> Le damos a la preview de la frase la clase .mediumSize y quita las otra dos
        - si escoge letra grande --> Le damos a la preview de la frase la clase .bigSize y quita las otra dos
*/

const inputSize = document.querySelector(".js-size");
// La constante previewTxt la creamos en previewFill.js

const changeClassSentence = (event) => {
    if (event.target.value === "small") {
        previewTxt.classList.add("smallSize");
        previewTxt.classList.remove("mediumSize");
        previewTxt.classList.remove("bigSize");
    } else if (event.target.value === "medium") {
        previewTxt.classList.add("mediumSize");
        previewTxt.classList.remove("smallSize");
        previewTxt.classList.remove("bigSize");
    } else if (event.target.value === "big") {
        previewTxt.classList.add("bigSize");
        previewTxt.classList.remove("mediumSize");
        previewTxt.classList.remove("smallSize");
    }
};

inputSize.addEventListener("input", changeClassSentence);