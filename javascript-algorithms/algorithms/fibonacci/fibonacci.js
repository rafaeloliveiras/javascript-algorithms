var fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i <= 250; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (var i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);

}