export{}
let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,true,'a', false];

const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2;

enum Color {Red,Green,Blue};
let backgroundColor=Color.Blue;


let message;
message='abc';
let endWithC =(<string>message).endsWith('c');
let alternativeWay=(message as string).endsWith('c');

class Point{
    constructor(private x?:number,private y?:number){
    }
    draw(){
console.log('X'+this.x +',Y'+this.y);
    }
}
let point =new Point();
point.draw();
