const makeToys = (toyCount, toyMakingTime) => {
    console.log(`Making ${toyCount} toys...`);
  
    const makeToyPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${toyCount} toys made.`);
        resolve();
      }, toyCount * toyMakingTime);
    });
  
    return makeToyPromise;
  }
  
  const deliverToys =(toyCount, deliveryTime) => {
    console.log(`Delivering ${toyCount} toys...`);
  
    const deliverToysPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${toyCount} toys delivered.`);
        resolve();
      }, toyCount * deliveryTime);
    });
  
    return deliverToysPromise;
  }
  
  const  sellToys = (toyCount, sellingTime) => {
    console.log(`Selling ${toyCount} toys...`);
  
    const sellToysPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${toyCount} toys sold.`);
        resolve();
      }, toyCount * sellingTime);
    });
  
    return sellToysPromise;
  }
  

  const toyCount = 5;
  const toyMakingTime = 3000; // 3 seconds to make a toy
  const deliveryTime = 2000; // 2 seconds delay for delivery
  const sellingTime = 1000; // 1 second to sell a toy
  
  makeToys(toyCount, toyMakingTime)
    .then(() => deliverToys(toyCount, deliveryTime))
    .then(() => sellToys(toyCount, sellingTime))
    .then(() => {
      console.log(`All toys processed.`);
    });