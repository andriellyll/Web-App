tableUsers = document.querySelector("div.container div#users table");
buttonElementUsers = document.querySelector("div.container div#users button");
inputElementUsers = document.querySelector("div.container div#users input");

tableBooks = document.querySelector("div.container div#books table");
buttonElementBooks = document.querySelector("div.container div#books button");
inputElementBooks = document.querySelector("div.container div#books input");

var users = [];
var books = [];

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
    renderUsersElements();
}

buttonElementBooks.onclick = () => {
    var nomeDoLivro = inputElementBooks.value;
    books.push(nomeDoLivro);
    inputElementBooks.value = '';
    renderBooksElements();
}

renderBooksElements();
renderUsersElements();