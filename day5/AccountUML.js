class Àccount
{
    constructor(number,balance)
    {
        this.number = number;
        this.balance = balance;
    }
	
	
	deposit() {
    return this.balance;
    }
  
    withdraw() {    
     return this.balance;
    }
	createTransaction()
	{

	}
}

class CurrentAccount {
   constructor(number,balance)
    {
        super(number,balance);
    }
	
    withdraw() {    
     return this.balance;
    } 
}

class SavingAccount 
{
    constructor(number,balance)
    {
        super(number,balance);
    }
}

class Customer
{
    constructor(name,address,dob,cardnumber,pin)
    {
        this.name = name;
        this.address = address;
        this.dob=dob;
        this.cardnumber = cardnumber;
        this.pin=pin;
    }

    verifyPassword()
    {

    }
}

class ATMTransactions
{
    constructor(transactionid,date,type,amount,postbalance)
    {
        this.transactionid = transactionid;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.postbalance = postbalance;
    }

    modifies()
    {

    }
}

class Bank
{
    constructor(code,address)
    {
        this.code = code;
        this.address = address;
    }
    manages()
    {

    }
    maintains()
    {

    }
}
class ATM
{
    constructor(location,managedby)
    {
        this.location = location;
        this.managedby = managedby;
    }

    identifies()
    {

    }
    transactions()
    {
        
    }
}