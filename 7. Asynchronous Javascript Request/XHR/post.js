const xhr = new XMLHttpRequest();

xhr.onload = function() {
    console.log(JSON.parse(this.responseText));
}

xhr.onerror = function(){
    console.log("Ups something error");
}

xhr.open("POST", "https://web-server-book-dicoding.appspot.com/add");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");
const book = {
    id: 8,
    title : "Kafka On The Shore",
    author : "Haruki Murakami"
}
xhr.send(JSON.stringify(book));