import { uiDeck } from "./uiDeck.js";
import { uiDrag } from "./uiDrag.js";


const initGame = () => {
    uiDeck.generar(".container-t"); 
    uiDrag.init(".contenedor", ".carta"); 
};


const resetGame = () => {
    document.querySelectorAll(".contenedor").forEach((contenedor) => {
        contenedor.innerHTML = ""; 
    });

    initGame();
};

document.getElementById("reset-button").addEventListener("click", resetGame);

initGame();
