import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather;
  constructor(private apiService: ApiService) { }

  ionViewDidEnter(){

    this.apiService.getWeather().subscribe((data)=>{
      console.log(data);
      this.weather = data['weather'];
    });
  }

  ngOnInit() {
  }

}
