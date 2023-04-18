const board = document.getElementById("board");
const currentBoatInSelectionP = document.getElementById("currentBoatInSelection");
const tiles = document.getElementsByClassName("tile");
const boatsSelection = document.getElementsByClassName("boats-selection");

let firstPhase = true;
let currentBoatInSelection = "none";

window.onload = () => {
    [...tiles].forEach((tile) => {
        if (firstPhase) {
            tile.onclick = () => {
                [...tiles].forEach((foo) => {
                    foo.classList.remove("selected-tile");
                }); 
                console.log(tile.dataset.tileNumber);
                console.log(tile.dataset.tileContent);
                tile.classList.add("selected-tile");
                if (currentBoatInSelection !== "none") {
                    tile.dataset.tileContent = currentBoatInSelection;
                    tile.style.backgroundColor = tile.dataset.tileContent;
                }
            };
        }
    }); 
    [...boatsSelection].forEach((boat) => {
        boat.onclick = () => {
            [...boatsSelection].forEach((foo) => {
                foo.classList.remove("selected-boat");
            });
            boat.classList.add("selected-boat");
            currentBoatInSelection = boat.dataset.selectedBoat;
            currentBoatInSelectionP.innerHTML = `Placing: ${currentBoatInSelection}`;
            console.log(boat.dataset.selectedBoat);
            return;
        };
    });
}