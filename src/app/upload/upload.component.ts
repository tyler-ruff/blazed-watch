import { Component, OnInit } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tag {
  name: string;
}
export interface Type{
  name: string;
  value: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  videoTypes: Type[] = [
    { name: "Video", value: "video" },
    { name: "Show", value: "show" },
    { name: "Movie", value: "movie" },
    { name: "Ad/Promotion", value: "promo" }
  ];
  thumbNails: Array<string> = [
    "https://blazed.sirv.com/ibis/blazed-cc.jpg",
    "https://blazed.sirv.com/ibis/blazed-city.jpg",
    "https://blazed.sirv.com/ibis/blazed-space.jpg",
    "https://blazed.sirv.com/ibis/blazed-world.jpg"
  ];

  thumbSelected: number = 0;
  videoSize: number = 0;
  videoType: string = "";

  tags: Tag[] = [{name: 'General'}];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;
  fileChosen: boolean = false;
  canUpload: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  /* material chips (tags) */

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  /* video upload */

  public onUpload(values: any){
    console.log(values.target.files);
    if(values.target.files.length === 1){
      this.videoSize = +(values.target.files[0]?.size);
      this.videoType = values.target.files[0]?.type;
      this.fileChosen = true;
      this.canUpload = true;
      if(document.getElementById("video-title")?.hasAttribute("value")){
        console.log(document.getElementById("video-title")?.getAttribute("value"));
        if(document.getElementById("video-title")?.getAttribute("value") === ""){
          document.getElementById("video-title")?.setAttribute("value", values.target.files[0]?.name);
        }
      }
    }
  }

  /* thumbnail select */

  public thumbSelect(values: any, index: number): void{
    //de-select old item
    document.getElementById("thumb-select-" + this.thumbSelected)?.classList.remove("border-black");
    //select new item
    values.currentTarget.classList.add("border-black");
    this.thumbSelected = index;
  }

}
