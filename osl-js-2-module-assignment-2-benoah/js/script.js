import { books } from "./Data/books.js";
const listInput = document.querySelector("input");
const button = document.querySelector("button");
let listItems = books;


// this function is going to put stuff in the html
function createList(books) {
    const booksList = document.querySelector(".bookList");
    booksList.innerHTML = "";
    // loop thru and insert 
    books.forEach(book => {
        booksList.innerHTML +=
            `<li><span>${book.title}</span><i class="fa fa-trash" data-item="${book.isbn}" ></li>`;// //Add a button or icon to each item that removes that particular item from the array.
    });
    // picking up what i want to work with and iam choosing all of them
    const TrashIconDeleter = document.querySelectorAll("li i")
    // Puttin addeventlistner 
    TrashIconDeleter.forEach(icon => {
        icon.addEventListener("click", eventHandler)
    });
}

createList(books);
addItem();


export function eventHandler(e) {
    // put the id value here,or what we what is call scsbb
    // its say stop every time I get here.
    const idValue = parseInt(e.target.dataset.item);


    const filteredBooks = books.filter(book => {
        if (parseInt(book.isbn) !== idValue) {
            return true;
        }
    });


    createList(filteredBooks);
}


// Create the list from an empty array that you use a text input and button 





button.addEventListener("click", addItem);

function addItem() {

    const inputValue = listInput.value.trim();




    const newItem = {
        isbn: Date.now(),
        title: inputValue
    };
    // pushing item to new array
    listItems.push(newItem)

    console.log(listItems);
    createList(listItems);
    return listItems;
}





// to add new objects to. 


// The objects can have the same structure as the array from level 1.