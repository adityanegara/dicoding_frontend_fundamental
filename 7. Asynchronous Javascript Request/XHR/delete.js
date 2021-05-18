const xhr = new XMLHttpRequest();

xhr.onload = function() {
    console.log(JSON.parse(this.responseText));
}

xhr.onerror = function(){
    console.log("Ups something error");
}

xhr.open("DELETE", "https://web-server-book-dicoding.appspot.com/delete/8");
xhr.setRequestHeader("X-Auth-Token", "12345");
xhr.send();