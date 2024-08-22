function submitClicked(){
    let gridSize = parseInt(document.querySelector("input").value);
    alert(gridSize);
    return gridSize;
}

function createGrid(){

    let n = parseInt(document.querySelector("input").value);
    if(n > 100){
        alert("Enter value less than 100");
        return;
    }
    container = document.querySelector(".container");
    let dim = (32/n) + "em";
    for(let i = 0; i < n*n; i++){
        const square = document.createElement("div");
        //square.setAttribute("style", "height: 1em; width: 1em;")
        square.style.width = dim;
        square.style.height = dim;
        square.classList.add("square");
        container.appendChild(square);
        
        container.addEventListener('mousedown', function(){
            trigger = true;
        });

        container.addEventListener('mouseup', function(){
            trigger = false;
        });

        square.addEventListener("mouseenter", function(e){
            if(trigger){
            e.target.style.background = "blue";
            };
        })
    }
}

function removeGrid(){
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

let trigger = false;
let container;

createGrid();

let submit = document.querySelector("#submitBtn");
submit.addEventListener("click", () => {
    removeGrid();
    createGrid();
});


let btn = document.getElementById("btn");
btn.onclick = function () {
    removeGrid();
} 

//console.log("ai0kis9kk9")