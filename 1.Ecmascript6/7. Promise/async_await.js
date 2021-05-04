const getCoffee = () => {
    return new Promise((resolve, reject) => {
      const seeds = 1;
      setTimeout(() => {
        if(seeds >= 10) {
          resolve("Coffee didapatkan!");
        } else {
          reject("Biji kopi habis!")
        }
      }, 1000)
    })
   }

   async function makeCoffee() {
    try {
        const coffee = await getCoffee();
      console.log(coffee);
      } catch(rejectedReason) {
        console.log(rejectedReason);
      }
   }
    
   makeCoffee();