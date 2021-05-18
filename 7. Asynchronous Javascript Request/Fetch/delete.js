const options = {
    method: "DELETE",
    headers: {
      "X-Auth-Token": "12345"
    }
};

async function deleteBook(){
    try{
        const response = await fetch("https://web-server-book-dicoding.appspot.com/delete/10", options);
        const responseJson = await response.json();
        console.log(responseJson);
    }catch(error){
        console.log(error);
    }

}

deleteBook();
