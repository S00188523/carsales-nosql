import { Component, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { CarApiService } from 'src/app/services/car-api.service';
import { ICar } from 'src/app/interfaces/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() carData!: ICar;
  @Output() carDeleteEvent = new EventEmitter<string>()

  carImageWidth = 150;

  constructor(private _carApiService:CarApiService) {}

  deleteCar(carId: string) {
  if (confirm('Are you sure you want to delete this car?')) {
    this._carApiService.delCarDetails(carId).subscribe(
      (result) => {
        console.log(result);
        // Emit an event to notify the parent component that the car has been deleted
        this.carDeleteEvent.emit('Car has been deleted');
      },
      (error) => console.log(error)
    );
  }
}


}
