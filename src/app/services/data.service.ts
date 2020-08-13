import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'http://localhost:3000/v1';

    constructor(public http: HttpClient){}

    public getProducts(): Observable<any> {
        return this.http.get<[Produto]>(`${this.url}/products`);
    }

    public autenticar(): Observable<any> {
        return this.http.get<[any]>(`${this.url}/accounts/authenticate`);
    }
}
