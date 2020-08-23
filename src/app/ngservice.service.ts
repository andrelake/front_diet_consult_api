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

  fetchFoodByIdFromServer(id: number): Observable<any> {
    return this._http.get<any>(this.urlList + '/' + id);
  }

  addFoodToServer(food: Food): Observable<any> {
    return this._http.post<any>(this.urlList, food);
  }

  updateFoodByIdFromServer(id: number, food: Food): Observable<any> {
    return this._http.put<any>(this.urlList + '/' + id, food);
  }

  deleteFoodByIdFromServer(id: number): Observable<any> {
    return this._http.delete<any>(this.urlList + '/' + id);
  }
}
