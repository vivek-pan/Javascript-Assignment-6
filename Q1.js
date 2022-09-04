class Rectangle{
    constructor(l, b){
        this.l = l;
        this.b = b;
    }
    area(l, b){
        let a = l*b;
        console.log(`The area is ${a}`);
    }
}

class Square extends Rectangle{
    constructor(l){
        super(l,l);
        this.area(l,l);
    }

}

let l = 10;
let square = new Square(l);

