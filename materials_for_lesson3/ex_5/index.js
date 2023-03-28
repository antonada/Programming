
function greatestCommandDevisior(a, b)
{
    while(b != 0)
    {
        let temp  = b;
        b = a % b
        a = temp
    }
    return a;
}

let num1 = 12
let num2 = 18

console.log("result", {greatestCommandDevisior(num1, num2)})
