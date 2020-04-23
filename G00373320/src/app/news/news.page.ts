import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles;
  constructor(private apiService: ApiService) { }

  ionViewDidEnter(){
    //Calls the get news and subsrcibes data before assigning to articles
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

  ngOnInit() {
  }

}
