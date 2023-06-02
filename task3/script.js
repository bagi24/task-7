

//async/await 

const  delay = (ms)  =>{
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function makeToys(toyCount, toyMakingTime) {
    console.log(`Making ${toyCount} toys...`);
    await delay(toyCount * toyMakingTime);
    console.log(`${toyCount} toys made.`);
  }
  
  async function deliverToys(toyCount, deliveryTime) {
    console.log(`Delivering ${toyCount} toys...`);
    await delay(toyCount * deliveryTime);
    console.log(`${toyCount} toys delivered.`);
  }
  
  async function sellToys(toyCount, sellingTime) {
    console.log(`Selling ${toyCount} toys...`);
    await delay(toyCount * sellingTime);
    console.log(`${toyCount} toys sold.`);
  }
  

  async function processToys() {
    const toyCount = 5;
    const toyMakingTime = 3000; // 3 seconds to make a toy
    const deliveryTime = 2000; // 2 seconds delay for delivery
    const sellingTime = 1000; // 1 second to sell a toy
  
    await makeToys(toyCount, toyMakingTime);
    await deliverToys(toyCount, deliveryTime);
    await sellToys(toyCount, sellingTime);
  
    console.log(`All toys processed.`);
  }
  
  processToys();