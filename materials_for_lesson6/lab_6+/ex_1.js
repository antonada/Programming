var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var albumNumber = 68343

var sum  = numbers.reduce(function(a, b){
    return a + b
});
console.log("Sum " + sum)

var evenNumbers = numbers.filter(function(number){
    return number % 2 === 0
});
console.log("Even nambers " + evenNumbers)

var multipliedNumbers = numbers.map(function(number){
    return number * 3
});
console.log("Multiplied by 3 " + multipliedNumbers)

numbers.push(albumNumber);
var albumIndex = numbers.indexOf(albumNumber);
console.log("Album index:" + albumIndex)

var average = sum / numbers.length;
console.log("Average " + average)

var maxNumber = Math.max.apply(null, numbers);
console.log("The largest number " + maxNumber)

var valueToCount = 3;
var count = number.reduce(function(n, val){
return n + (val === valueToCount)
}, 0);
console.log("Number of occurrences of " + valueToCount + count)
