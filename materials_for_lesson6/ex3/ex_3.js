class trapezoid 
{
    constructor(height, base1, base2, name) 
    {
      this.height = height;
      this.base1 = base1;
      this.base2 = base2;
      this.name = name;
    }
 
    calculate_field() 
    {
      return ((this.base1 + this.base2) * this.height) / 2;
    }
 }
 
 let trapezoid1 = new Trapezoid(4, 5, 7, "Trapez1");
 let trapezoid2 = new Trapezoid(3, 8, 10, "Trapezoid2");
 let trapezoid3 = new Trapezoid(6, 9, 12, "Trapez3");
 
 console.log(trapezoid1.calc_area());
 console.log(trapezoid2.calc_area());
 console.log(trapezoid3.calc_area());
 