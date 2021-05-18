const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345"
    },
    body: JSON.stringify({
      id: '10',
      title: `Cantik Itu Luka`,
      author: `Eka Kurniawan`
    })
};

async function createBook(){
    try{
        const response = await fetch("https://web-server-book-dicoding.appspot.com/add", options);
        const responseJson = await response.json();
        console.log(responseJson);
    }catch(error){
        console.log(error);
    }

}

createBook();






