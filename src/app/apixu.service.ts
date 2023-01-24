import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  
  constructor(private http: HttpClient) {}

  getWeather(location: any){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=7d32250aaf94cce78ba4d14b97b76fe7&query=' + location
      );
  }

}


