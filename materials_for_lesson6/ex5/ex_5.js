function find_larger_perimeter(rectangle1, rectangle2) 
{
    let perimeter1 = 2 * (rectangle1.side_a + rectangle1.side_b);
    let perimeter2 = 2 * (rectangle2.side_a + rectangle2.side_b);
 
    if (circuit1 > circuit2) {
      return rectangle1;
    } else if (circuit2 > circuit1) {
      return rectangle2;
    } else {
      return "Both rectangles have the same perimeter.";
    }
 }
 
 let rectangle1 = {
    side_a: 5,
    side_b: 10,
 };
 
 let rectangle2 = {
    side_a: 7,
    side_b: 8,
 };
 
 let greater_perimeter = find_larger_perimeter(rectangle1, rectangle2);
 
 if (typeof larger_circumference === "string") {
    console.log(larger_circumference);
 } else {
    console.log("The rectangle with sides " + greater_perimeter_a + " and " + greater_perimeter_b + " has a greater perimeter.");
 }
