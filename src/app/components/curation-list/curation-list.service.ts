import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { ICuration, ICurationResponse } from "../../types/curation.types";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class CurationListService {
  constructor(
    private http: HttpClient
  ) { }

  getCurationList(): Observable<any> {
    return this.http.get('https://api.ddocdoc.com/v2/eventBanner?populate=true').pipe(
      map((res: ICurationResponse) => res.items )
    )
  }
}