
var operation=['add','sub','mul','div'];

function arithmeticOp(val,oper)
{
    var val1 =10, val2 = 5;
    var res ;

    if(oper[val] === 'add')
    {
        res= val1 + val2;
    }
    if(oper[val] === 'sub')
    {
        res = val1-val2;
    }
    if(oper[val] === 'mul')
    {
        res = val1*val2;
    }
    if(oper[val] === 'div')
    {
        res = val1/val2;
    }
    return res;
}

var ad = arithmeticOp(0,operation);
console.log(ad);
var su = arithmeticOp(1,operation);
console.log(su);
var ml = arithmeticOp(2,operation);
console.log(ml);
var di = arithmeticOp(3,operation);
console.log(di);
