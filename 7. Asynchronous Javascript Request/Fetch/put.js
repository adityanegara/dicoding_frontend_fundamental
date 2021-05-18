const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345"
    },
    body: JSON.stringify({
      title: `Cantik Itu Luka Edited`,
      author: `Eka Kurniawan Edited`
    })
};

async function editBook(){
    try{
        const response = await fetch("https://web-server-book-dicoding.appspot.com/edit/10", options);
        const responseJson = await response.json();
        console.log(responseJson);
    }catch(error){
        console.log(error);
    }

}

editBook();
