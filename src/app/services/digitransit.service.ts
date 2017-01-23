import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {

  constructor(private http: Http) { }

  getAllMedia(name: string) {
    let headers = new Headers({ 'Content-Type': 'application/graphql' });
    let options = new RequestOptions({ headers: headers });
    let data = `{
      stops(name: "${name}") {
        patterns {
          name
        }
      }
    }`;
    return this.http.post('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', data, options).map(
      (res: Response) => res.json()
    ).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
