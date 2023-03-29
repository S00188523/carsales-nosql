import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarApiService } from 'src/app/services/car-api.service';
import { ICar } from 'src/app/interfaces/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() carData!: ICar;

  carImageWidth = 300;

  constructor(private _carApiService:CarApiService) {}

  deleteCar(carId:string) { 
    this._carApiService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }

}
