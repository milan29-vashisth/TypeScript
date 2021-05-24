export{}
let message='hello milan'
console.log(message);

let x=10;
const y=15;
let sum;
const title ='hello ts';

let isBeginer:boolean=true;
let total:number=0;
let name:string='Milan Vashisth';

let sentence:string=`My name is ${name}
I am beginner in ts`
console.log(sentence);

let n:null=null;
let u:undefined=undefined;

let isNew:boolean=null;
let myName:string=undefined;

let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2];

let person :[string,number]=['cheis',22];

enum color {Red=5,Green,Blue};

let c:color=color.Green
console.log(c);

let randomValue:any=10;
randomValue=true;
randomValue='Milan';

let myVariable:unknown=10;


function hasName(obj:any):obj is{name:string}{
    return!!obj &&
    typeof obj ==='object' &&
     'name' in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name)
}
// (myVariable as string).toUpperCase();

let a;
a=10;
a=true;

let b=10;

let multiType:number|boolean;
multiType=20;
multiType=true;

let anyType:any;
anyType=20;
anyType=true;

function add(num1:number,num2:number=8):number{
    if(num2)
    return num1+num2;
    return num1;
}
add(5,10);
add(5);

interface Person{
    firstName:string;
    lastName:string;
}

function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p={
    firstName:'Milan',
    lastName:'Vashisth'
}
fullName(p);

class Employee{
   public employeeName:string;

    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 =new Employee('Chunnu');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manger delagting task`)
    }
}
let m1=new Manager('Vashisth');
m1.delegateWork();
m1.greet()
console.log(m1.employeeName)