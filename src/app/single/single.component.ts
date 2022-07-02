import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Video{
  meta: {
    title: string,
    description: string,
    type: string,
    tags: string[]
  },
  img: {
    poster: string,   // Poster image, large splash screen
    thumb: string,    // Thumbnail image, small square image
  },
  vid: {
    mp4: string,      // MP4 Source
    webm?: string     // Webm Source (? optional)
  }
} 

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent implements OnInit {

  descExpanded: boolean = false;
  id: string | undefined;
  video: Video = {
    meta: {
      title: "Video Title",
      description: "Enter video description here.",
      type: "video",
      tags: [
        "General",
        "Default"
      ]
    },
    img: {
      poster: "https://blazed.sirv.com/logo/Wallpaper-Beaker.png",
      thumb: "https://blazed.sirv.com/ibis/blazed-watch-film.png"
    },
    vid: {
      mp4: "https://firebasestorage.googleapis.com/v0/b/blz-one-9e383.appspot.com/o/TImelapse1_grade1.mp4?alt=media&token=980e8f57-3f4d-4260-af9d-7714dfc1a9c3"
    }
  }
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
  
    this.route.queryParams
      .subscribe(params => {
        //console.log(params); // { orderby: "price" }
        //console.log(this.id); // price
        this.id = params['id'];
      }
    );
    
  }

}
