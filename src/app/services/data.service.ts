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

    public autenticar(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/authenticate`, model);
    }

    public refreshToken(): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/refresh-token`, null);
    }

    public create(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts`, model);
    }

    public restaura(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/reset-password`, model);
    }
}
