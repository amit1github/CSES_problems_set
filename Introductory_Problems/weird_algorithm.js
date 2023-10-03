const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let n = parseInt(input, 10);
    
  while (n !== 1) {
    process.stdout.write(n + " ");

    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
  }

  console.log(1);
  rl.close();
});
