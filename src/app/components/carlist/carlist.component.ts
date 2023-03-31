import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CarApiService } from 'src/app/services/car-api.service';
import { ICar, NewCar } from 'src/app/interfaces/car';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  
})
export class CarlistComponent implements OnInit {
  carsData: ICar | any;
  show!: boolean;
  editCar: any;
  isEditing: any;

  constructor(private _carApiService:CarApiService){}

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carApiService.getCarDetails().subscribe(carsData => {
      this.carsData = carsData;
    });
  }

  addCar(make:string, model:string, colour:string, year:string, price:string, mileage:string, imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,colour,year,price,mileage,imageUrl);
    this._carApiService.addCarDetails(addCar).subscribe(carsData => {
      this.carsData = carsData;
    });
    return false;
  }

  refreshCars() {
    this.getCars();
  }

  onDeleteCar() {
    this.refreshCars();
  }
}

