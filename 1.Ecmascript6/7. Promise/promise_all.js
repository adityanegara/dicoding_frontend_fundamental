const arabicaOrder = () =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Kopi Arabica Selesai");
        }, 4000);
    })
}

const robustaOrder = () =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Kopi Robusta Selesai");
        },2000)
    });
}

const libericaOrder = () =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Kopi Liberica Selesai");
        }, 3000)
    });
}



const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promises)
        .then(resolvedValue => {
        console.log(resolvedValue);
        })