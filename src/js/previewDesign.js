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
const inputColor = document.querySelector(".js-color");
// La constante previewTxt la creamos en previewFill.js

const changeClassSentence = (event) => {
    if (event.target.value === "small") {
        previewTxt.classList.add("smallSize");
        previewTxt.classList.remove("mediumSize", "bigSize");
    } else if (event.target.value === "medium") {
        previewTxt.classList.add("mediumSize");
        previewTxt.classList.remove("smallSize", "bigSize");
    } else if (event.target.value === "big") {
        previewTxt.classList.add("bigSize");
        previewTxt.classList.remove("mediumSize", "smallSize");
    }
};

inputSize.addEventListener("input", changeClassSentence);

/*
Seleccionar el input de colores, nivel de desesperacion y la frase escogida (ya tenemos desperation y la frase)
Crear las clases de los colores.
Cuando la usuaria escoja el input:
 - Si elige la opcion 1 que sea del color patata
 - Si elige la opcion 2 que sea del color patata 2
 - Si elige la opcion 3 que sea del color patata 3.
*/

const changeColor = (ev) => {
        if (ev.target.value === "option1") {
            previewTxt.classList.add("color1");
            previewDesperation.classList.add("background1");
            previewTxt.classList.remove("color2", "color3");
            previewDesperation.classList.remove("background2", "background3");
        } else if (ev.target.value === "option2") {
            previewTxt.classList.add("color2");
            previewDesperation.classList.add("background2");
            previewTxt.classList.remove("color1", "color3");
            previewDesperation.classList.remove("background1", "background3");
        } else if (ev.target.value === "option3") {
            previewTxt.classList.add("color3");
            previewDesperation.classList.add("background3");
            previewTxt.classList.remove("color1", "color2");
            previewDesperation.classList.remove("background1", "background2");
        }

}

inputColor.addEventListener("input", changeColor);
