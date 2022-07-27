let message = document.querySelector("#message")
console.log(message)
// let mainTag = document.querySelector("main")
// console.log(mainTag)
// mainTag.innerHTML = "<h1>Movie List</h1>"
function addMovie(event){
    event.preventDefault()
    // let inputField = document.getElementById("s").value;
    let inputField = document.querySelector("#s")
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
}

document.querySelector("form").addEventListener('submit', addMovie)

let deleteMovie = event => {
   message.textContent = "movie deleted!" 
   event.target.parentNode.remove()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains('checked') === true){
        message.textContent = "Movie watched!"
    }
    else{
        message.textContent = "Movie added back!"
    }
}
