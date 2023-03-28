import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { ICar } from '../interfaces/car';
@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor() { }
}
