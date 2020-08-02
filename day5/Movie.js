class Movie
{
    constructor(title,studio,rating='PG')
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(arr) {
        var newarr =[];
       
        for(var i=0;i<arr.length;i++)
        {
        for(var val in arr[i])
          {                
              if(arr[i][val] === 'PG')
              {
                newarr.push(arr[i]);
              }
          }
        }
      return newarr;
    }
    getMovie()
    {
        return this.title +" "+this.studio+" "+this.rating;
    }

}

var mov = new Movie('Casino Royale','Eon production','PG13');
console.log(mov.getMovie());
var obj1 ={
    "title":'Home Alone 3',
    "studio":'Hughes Entertainment',
    "rating":'PG13'
} 
var obj2 ={
    "title":'Jumanji',
    "studio":'TriStar Pictures',
    "rating":'PG'
} 
var obj3 ={
    "title":'Night at the Museum',
    "studio":'Twentieth Century Fox',
    "rating":'PG'
} 
var arr = [obj1,obj2,obj3];
var arr1 = mov.getPG(arr);
console.log(arr1);
