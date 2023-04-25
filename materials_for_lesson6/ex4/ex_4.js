function find_largest_figure(rectangle, triangle, trapezoid)
 {
    let rectangle_area = rectangle.calc_area();
    let triangle_area = triangle.calc_area();
    let trapezoid_area = trapezoid.calc_area();
 
    let largest_area = Math.max(area_rectangle,area_triangle,area_trapezoid);
 
    if (largest_area === area_rectangle) {
      console.log("The largest figure is " + rectangle.name + " with area " + area_rectangle);
    } else if (biggest_area === triangle_area) {
      console.log("The largest figure is " + triangle.name + " with area " + triangle_area);
    } else {
      console.log("The largest figure is " + trapezoid.name + " with area " + trapezoid_area);
    }
 }
 
 let rectangle1 = 
 {
    side_a: 5,
    side_b: 10,
    name: "Rectangle1",
    calculate_field: function() {
      return this.box_a * this.box_b;
    }
 };
 
 let triangle1 = 
 {
    base: 8,
    height: 6,
    name: "Triangle1",
    calculate_field: function() {
      return (this.base * this.height) / 2;
    }
 };
 
 let trapezoid1 = new Trapezoid(4, 5, 7, "Trapez1");
 find_largest_figure(rectangle1, triangle1, trapezoid1);
