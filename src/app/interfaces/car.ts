export interface ICar {
    _id:string;
    make: string;
    model: string;
    colour:string;
    year: string;
    price: string;
    mileage: string;
    imageURL: string;
}

export class NewCar implements ICar {
    _id!:string;
    make: string;
    model: string;
    colour: string;
    year: string;
    price!: string;
    mileage!: string;
    imageURL: string;


    constructor(make:string,model:string,colour:string,year:string,price:string,mileage:string,imageURL:string){
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.year = year;
        this.price = price;
        this.mileage = mileage;
        this.imageURL = imageURL;
    }
}