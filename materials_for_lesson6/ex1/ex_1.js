class Rectangle 
{
    constructor(height, width, name)
    {
        this.height = height;
        this.width = width;
        this.name = name;
    }
  
    calculate_circumference() 
    {
      return 2 * (this.height + this.width);
    }
  
    calculate_field() 
    {
      return this.height * this.width;
    }
  
    compare_fields(another_rectangle) 
    {
      if (this.calculate_field() > another_rectangle.calc_area()) 
      {
        return this;
      } else {
        return another_rectangle;
      }
    }
  }
  
  let rectangle1 = new Rectangle(5, 10, "Rectangle1");
  let rectangle2 = new Rectangle(3, 8, "Rectangle2");
  let rectangle3 = new Rectangle(7, 12, "Rectangle3");
  
  console.log(Rectangle1.calculate_circumference()); 
  console.log(Rectangle2.calculate_field());
  console.log(Rectangle3.compare_fields(rectangle2));
