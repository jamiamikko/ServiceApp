import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  constructor(private http: Http) { }

  getAllMedia() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media').map(
      (res: Response) => res.json()
    );
  }

}
