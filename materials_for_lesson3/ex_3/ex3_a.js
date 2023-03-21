let number = Math.ceil(Math.random() * 10)

let guess_num = prompt("Guess the number between 1 - 10")

if(guess_num == number)
{
    console.log("Good job")
}
else
{
console.log("Bad job :(")
}
