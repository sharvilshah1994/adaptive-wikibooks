import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class BackendService {
  url = "https://search-aw-service-gj2acwxzzkqsr5pnvwy45jsebi.us-east-1.es.amazonaws.com/javabooks/";

  constructor(private http: Http) {

  }

  getRecommendation(data) {
    return this.http.get(this.url + "wiki/_search?q=" + data)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getStemming(data) {
    return this.http.get(this.url + "_analyze?text="+ data)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }


}
