document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight") {
        //doe to move the dodger right
    }
});

document.addEventListener("keydown", function (event) {
 if (event.key === "ArrowRight") {
    let left = parseInt(dodger.style.left);
    let dodgerWidth = dodger.oggsetWidth;
    let gameDieldWidth = document.getElementById("game").offsetWidth;
    if (left + dodgerWidth < gameFieldWidth) {
        dodger.style.left =`${left + 1}px`;
      }
    }
});







