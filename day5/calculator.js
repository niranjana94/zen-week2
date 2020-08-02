class calculator
{
    constructor(num1,num2)
    {
        this.val1 = num1;
        this.val2 = num2;
    }
    add() {
    return this.val1 + this.val2;
    }
     sub() {
    return this.val1 - this.val2;
    }
     mul() {
    return this.val1 * this.val2;
    }
     div() {
    return this.val1 / this.val2;
    }
}

var usecal = new calculator(10,5);
console.log(usecal.add());
console.log(usecal.sub());
console.log(usecal.mul());
console.log(usecal.div());







