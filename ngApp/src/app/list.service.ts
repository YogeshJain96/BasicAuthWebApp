import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ListService {
  private _commonListUrl = "http://localhost:3000/api/commonlist";
  private _specialListUrl = "http://localhost:3000/api/speciallist";

  constructor(private http: HttpClient) {}

  getCommonList() {
    return this.http.get<any>(this._commonListUrl);
  }

  getSpecialList() {
    return this.http.get<any>(this._specialListUrl);
  }
}
