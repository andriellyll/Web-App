usersContainer = document.querySelector("div.container div#users");
tableUsers = document.querySelector("div.container div#users table");
buttonElementUsers = document.querySelector("div.container div#users form button");
inputElementUsers = document.querySelector("div.container div#users form input");
formUsers = document.querySelector("div.container div#users form");

linkElementUsers = document.querySelector("div.container div#sidebar #linkUsers");
linkElementBooks = document.querySelector("div.container div#sidebar #linkBooks");

booksContainer = document.querySelector("div.container div#books");
tableBooks = document.querySelector("div.container div#books table");
buttonElementBooks = document.querySelector("div.container div#books form button");
inputElementBooks = document.querySelector("div.container div#books form input");
formBooks = document.querySelector("div.container div#books form");

var users = JSON.parse(localStorage.getItem('users')) || [];
var books = JSON.parse(localStorage.getItem('books')) || [];

function renderUsersElements() {
    var content = `<tbody><tr>
                    <th>ID</th>
                    <th>USUÁRIO</th>
                </tr>
            </tbody>`
    tableUsers.innerHTML = content;
    
    var id = 1;
    users.forEach(user => {
        var rowElement = document.createElement('tr');
        var cellElement1 = document.createElement('td');
        var cellElement2 = document.createElement('td');
        var textElement1 = document.createTextNode(id); 
        var textElement2 = document.createTextNode(user);

        cellElement1.appendChild(textElement1);
        cellElement2.appendChild(textElement2);
        rowElement.appendChild(cellElement1);
        rowElement.appendChild(cellElement2);
        tableUsers.appendChild(rowElement);

        id++;
    })
}

function renderBooksElements() {
    var content = `<tbody><tr>
                    <th>ID</th>
                    <th>LIVRO</th>
                </tr>
            </tbody>`
    tableBooks.innerHTML = content;
    
    var id = 1;
    books.forEach(book => {
        var rowElement = document.createElement('tr');
        var cellElement1 = document.createElement('td');
        var cellElement2 = document.createElement('td');
        var textElement1 = document.createTextNode(id); 
        var textElement2 = document.createTextNode(book);

        cellElement1.appendChild(textElement1);
        cellElement2.appendChild(textElement2);
        rowElement.appendChild(cellElement1);
        rowElement.appendChild(cellElement2);
        tableBooks.appendChild(rowElement);

        id++;
    })
}

buttonElementUsers.onclick = () => {
    var nomeDoUsuário = inputElementUsers.value;
    users.push(nomeDoUsuário);
    inputElementUsers.value = '';
    saveUsersToStorage();
    renderUsersElements();
}

buttonElementBooks.onclick = () => {
    var nomeDoLivro = inputElementBooks.value;
    books.push(nomeDoLivro);
    inputElementBooks.value = '';
    saveBooksToStorage();
    renderBooksElements();
}

linkElementUsers.onclick = () => {
    booksContainer.style.visibility = "visible";
    usersContainer.style.visibility = "visible";
    formUsers.style.visibility = "visible";
    formBooks.style.visibility = "hidden";
    renderUsersElements();
    renderBooksElements();
}

linkElementBooks.onclick = () => {
    booksContainer.style.visibility = "visible";
    usersContainer.style.visibility = "visible";
    formBooks.style.visibility = "visible";
    formUsers.style.visibility = "hidden";
    renderUsersElements();
    renderBooksElements();
}

function saveUsersToStorage(){
    localStorage.setItem('users', JSON.stringify(users));
}

function saveBooksToStorage(){
    localStorage.setItem('books', JSON.stringify(books));
}

booksContainer.style.visibility = "hidden";
usersContainer.style.visibility = "hidden";