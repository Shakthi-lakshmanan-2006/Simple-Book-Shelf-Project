var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup")


addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()

}

var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function () {
    var searchTerm = searchInput.value.toLowerCase();
    var books = document.querySelectorAll(".book-container");
    var found = false;

    books.forEach(function (book) {
        var title = book.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            alert("Book Found:\n\nTitle: " + book.querySelector("h2").textContent +
                  "\nAuthor: " + book.querySelector("h5").textContent +
                  "\nDescription: " + book.querySelector("p").textContent);
            found = true;
        }
    });

    if (!found) {
        alert("No book found");
    }

    searchInput.value = "";
});
