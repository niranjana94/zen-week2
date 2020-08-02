class TV
{
    constructor(brand,channel =1,price,inches,onofstatus,volume=50)
    {
        this.brand = brand;
        this.channel = channel;
        this.price =price;
        this.inches = inches;
        this.onofstatus = onofstatus;
        this.volume = volume;
    }
    
    incVol()
    {   this.volume++;      
        if(this.volume >0 && this.volume <100)
        {         
         return this.volume;
        }
        else
        return -1;
    }
    
    decVol()
    {   this.volume--;      
        if(this.volume >0 && this.volume <100)
        {         
         return this.volume;
        }
        else
        return -1;
    }
    setChannel()
    {
        var max = 50;
        if(this.channel >max)
          return this.channel;
        
          return this.channel;
    }
    resetTV(channel,volume)
    {
        var arr =[];
        arr.push(this.channel,this.volume);
        return arr;
    }
    status()
    {
        var str = this.brand +' at channel '+this.channel +', volume '+this.volume;
        return str;
    }
}

var tv = new TV('panasonic',8,60000,45,'on',75);
console.log(tv.incVol());
console.log(tv.decVol());
console.log(tv.setChannel());
console.log(tv.resetTV());
console.log(tv.status());


class LED extends TV
{
    constructor(brand,screenthick,energyusage,lifespan,refresh)
    {
        super(brand);
        this.screenthick = screenthick;
        this.energyusage = energyusage;
        this.lifespan = lifespan;
        this.refresh = refresh;
    }
    viewingAngle()
    {
        return '120 - 160';
    }
    backlight()
    {
        return 'Multicolor';
    }
    displayDetails()
    {
      var newarr = [];
      newarr.push(this.screenthick,this.energyusage,this.lifespan,this.refresh);
      return newarr.join(' ');
    }

} 

var led = new LED('Panasonic','5cm','138Watt','15years',60)
console.log(led.status());
console.log(led.displayDetails());

class plasma extends TV
{
    constructor(brand,screenthick,energyusage,lifespan,refresh)
    {
        super(brand);
        this.screenthick = screenthick;
        this.energyusage = energyusage;
        this.lifespan = lifespan;
        this.refresh = refresh;
    }
    viewingAngle()
    {
        return '90 - 160';
    }
    backlight()
    {
        return 'Multicolor';
    }
    displayDetails()
    {
      var newarr = [];
      newarr.push(this.screenthick,this.energyusage,this.lifespan,this.refresh);
      return newarr.join(' ');
    }

} 

var pls = new plasma('panasonic','7cm','180Watt','15years',60)
console.log(pls.status());
console.log(pls.displayDetails());


