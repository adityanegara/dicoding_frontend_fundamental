async function getBooks(){
    try{
        const response = await fetch("https://web-server-book-dicoding.appspot.com/list");
        const responseJson = await response.json();
        console.log(responseJson);
    }catch(error){
        console.log(error);
    }

}

getBooks();