import { Component, OnInit } from '@angular/core';
import { NowPlayingService } from 'src/app/shared/services/now-playing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nowPlayingService: NowPlayingService) { }

  ngOnInit() {
    this.nowPlayingService.getNowPlayingMovies()
      .then(
        res => console.log(res)
      );
  }

}
