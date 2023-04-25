var fib = [0, 1];
for (var i = 2; i < 100; i++) 
{
   fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib);
