const makeCoffe = (ingredient) =>{
    return new Promise((resolve, reject) =>{
        if(ingredient){
            resolve("Kopi berhasil dibuat")
        }else{
            reject("Kopi gagal dibuat")
        }
    });
}

makeCoffe()
.then(console.log)
.catch(console.log)