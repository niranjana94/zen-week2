class CIRCLE
{
    constructor(radius,color,...args)
    {
        this.radius = radius;
        this.color = color;
    }
	
	
	get radius() {
    return this._radius;
    }
  
    set radius(value) {    
    this._radius = value;
    }

    
    getRadius()
    {
        return this.radius;
    }
    getColor()
    {
        return this.color;
    }
	getArea()
	{
	   return (Math.pi *this.radius*this.radius);
	}
   
}

var circle = new CIRCLE(2.0,'blue');

console.log(circle.getRadius());
console.log(circle.getColor());
console.log(circle.getArea());