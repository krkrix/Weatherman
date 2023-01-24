import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData:any;

  constructor(
    private formBuilder: FormBuilder, 
    private apixuService: ApixuService,

    ) {}

  ngOnInit():void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues: any) {
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => {this.weatherData = data;
     console.log(this.weatherData);
    });
}
}
