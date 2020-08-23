import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class NgserviceService {
  constructor(private _http: HttpClient) {}

  urlList: string = 'http://localhost:8080/api/foods';

  fetchFoodListFromServer(): Observable<any> {
    return this._http.get<any>(this.urlList);
  }

  addFoodToServer(food: Food): Observable<any> {
    return this._http.post<any>(this.urlList, food);
  }
}
