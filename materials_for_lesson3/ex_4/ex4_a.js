var num1 = parseFloat(prompt("Enter number: "))
var num2 = parseFloat(prompt("Enter second number: "))
var num3 = parseFloat(prompt("Enter third number: "))

if (num1 > num2 && num1 > num3) 
{
    console.log("The largest number is: ", num1)
}
else if(num2 > num1 && num2> num3)
{
    console.log("The largest number is:", num2);
}
else
{
    console.log("The largest number is:", num3);
}


