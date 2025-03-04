
/*
- Crear clase collapsed (display: none)
- Seleccionar Rellena, Diseña y Comparte
- Seleccionar cada caja (para luego darle o quitarle clase collapsed)

- Cuando la usuaria haga click en Rellena:
    - Le quitamos la clase a la caja de rellena
    - Le damos la clase a los otros dos
- Cuando la usuaria haga click en Diseño:
    - Le quitamos la clase a la caja de diseña
    - Le damos la clase a los otros dos
- Cuando la usuaria haga click en Comparte:
    - Le quitamos la clase a la caja de comparte
    - Le damos la clase a los otros dos
*/

const fill = document.querySelector(".js-form-fill");
const design = document.querySelector(".js-form-design");
const share = document.querySelector(".js-form-share");
const fillBox = document.querySelector(".js-div-fill");
const designBox = document.querySelector(".js-div-design");
const shareBox = document.querySelector(".js-div-share");

fill.addEventListener("click", () => {
    fillBox.classList.toggle("collapsed");
    designBox.classList.add("collapsed");
    shareBox.classList.add("collapsed");
})

design.addEventListener("click", () => {
    designBox.classList.toggle("collapsed");
    fillBox.classList.add("collapsed");
    shareBox.classList.add("collapsed");
})

share.addEventListener("click", () => {
    shareBox.classList.toggle("collapsed");
    fillBox.classList.add("collapsed");
    designBox.classList.add("collapsed");
})
