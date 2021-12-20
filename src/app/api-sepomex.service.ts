import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface State {
  name: string,
  state_code: string,
  is_active: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ApiSepomexService {

  constructor( private http: HttpClient) { }

  getAllStates(): Observable<State[]> {
    return this.http.get('http://127.0.0.1:8000/estados').pipe(
      map((resp: any) => resp )
    );
  }
}

