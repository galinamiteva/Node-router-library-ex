/**
 * API - Childrens books
 * 
 * URL: /books  
 * Metod: GET
 * Description: Hämtar alla böcker från childrensbooks.json och skickar tillbaka
 * 
 * URL: /books/:id
 * Metod: GET
 * Params: id som är en siffra 1-6
 * Description: Baserat på id så hämtar vi ut en specifik bok med det matchade id:et och returnerar denna
 */

const fs = require('fs');
const express = require('express');
const cors = require('cors');
//Skapa en server från express
const server = express();

server.use(cors());

server.get('/books', (request, response) => {
    fs.readFile('childrensbooks.json', 'utf8', (error, content) => {
        response.send(content);
    });
});

server.get('/books/:id', (request, response) => {
    console.log('Id är: ', request.params.id);
    //Hämta id från url:en och spara i en variabel
    const id = request.params.id;
    //Läs in childrensbooks.json
    fs.readFile('childrensbooks.json', 'utf8', (error, content) => {
        //Gör om till JSON för att kunna loopa igenom
        const books = JSON.parse(content);
        //Använd arraymetoden filter för att loopa igenom och returnera ett matchande objekt
        const foundBook = books.filter((book) => {
            return book.id === parseInt(id);
        });
        //Skicka tillbaka det hittade objektet
        response.send(foundBook[0]);
    });
});

//Servern lyssnar på en specifik port (i detta fall 7000)
//Lyckades det så kör den nedanstående funktion
server.listen(7000, () => {
    console.log('Server started on http://localhost:7000');
});