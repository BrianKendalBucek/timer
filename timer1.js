let input = process.argv
input = input.slice(2);

input.forEach((delay) => {
  const indivDelay = Number(delay);
  if (!isNaN(indivDelay) && indivDelay > 0) {
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, indivDelay * 1000);
  }
});