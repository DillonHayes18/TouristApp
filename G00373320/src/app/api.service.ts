import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'c5b9a0e6dcf94307b3138db04a1fb754';
  constructor(private httpClient:HttpClient) { }

  getWeather(){
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=b169b74319f1b7626bcd86b9272a02b7');
  }

  getNews(){
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=ie&apiKey=${this.API_KEY}`);
  } 
}
