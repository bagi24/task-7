const  mySetTimeout = (delay)  => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  mySetTimeout(2000).then(() => {
    console.log("Delayed message after 2 seconds");
  });