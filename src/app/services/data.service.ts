import { Security } from './../utils/user.util';
import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'http://localhost:3000/v1';

    constructor(public http: HttpClient){}

    public comporHeader(): HttpHeaders {
        const token = Security.getToken();
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    public getProducts(): Observable<any> {
        return this.http.get<[Produto]>(`${this.url}/products`);
    }

    public autenticar(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/authenticate`, model);
    }

    public refreshToken(): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/refresh-token`, null,
        { headers: this.comporHeader() });
    }

    public create(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts`, model);
    }

    public restaura(model: any): Observable<any> {
        return this.http.post<[any]>(`${this.url}/accounts/reset-password`, model);
    }

    public getProfile(): Observable<any> {
        return this.http.get<[any]>(`${this.url}/accounts`, { headers: this.comporHeader() });
    }

    public putProfile(model: any): Observable<any> {
        return this.http.put<[any]>(`${this.url}/accounts`, model,
        { headers: this.comporHeader() });
    }
}
