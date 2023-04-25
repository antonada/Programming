class Triangle 
{
    constructor(height, length, name) 
    {
      this.height = height;
      this.length = length;
      this.name = name;
    }
 
    calculate_field() 
    {
      return (this.length * this.height) / 2;
    }

    compare_fields(another_triangle) 
    {
      if (this.calc_area() > another_triangle.calc_area()) {
        return this;
      } else {
        return another_triangle;
      }
    }
 }
 
 let triangle1 = new Triangle(5, 10, "Triangle1");
 let triangle2 = new Triangle(3, 8, "Triangle2");
 let triangle3 = new Triangle(7, 12, "Triangle3");
 
 console.log(triangle1.calc_area());
 console.log(triangle2.calc_area());
 console.log(triangle3.compare_fields(triangle2));

