const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes-4-notes");
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes-4-notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    // let textFormatButton = document.createElement("button");
    
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    // textFormatButton.className = "text-format-button";
    // textFormatButton.innerHTML = "d";
    
    notesContainer.appendChild(inputBox).appendChild(img);
    // notesContainer.appendChild(textFormatButton)
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P" || e.target.tagName === "DIV") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
