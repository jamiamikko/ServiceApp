import { DigitransitService } from './../services/digitransit.service';
import { Response } from '@angular/http';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  private images: any = [];
  private stops: any = [];

  constructor(private mediaService: MediaService, private digiService: DigitransitService) { }

  getMedia() {
    this.mediaService.getAllMedia().subscribe(
      (res: Response) => {
        this.images = res;
      }
    );
  }

  getHslMedia() {
    this.digiService.getAllMedia('Gransinmäki').subscribe(
      (res) => {
        this.stops = res.data.stops[0].patterns;
      }
    )
  }

  ngOnInit() {
    this.getMedia();
    this.getHslMedia();
  }

}
