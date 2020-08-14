import { Usuario } from '../models/usuario.model';

export class Security {
    public static set(user: Usuario, token: string): void {
        const data = JSON.stringify(user);

        localStorage.setItem('petshopuser', btoa(data));
        localStorage.setItem('petshoptoken', token);
    }

    public static setUsuario(user: Usuario): void {
        const data = JSON.stringify(user);
        localStorage.setItem('petshopuser', btoa(data));
    }

    public static setToken(token: string): void {
        localStorage.setItem('petshoptoken', token);
    }

    public static getUsuario(): Usuario {
        const data = localStorage.getItem('petshopuser');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('petshoptoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken()) {
            return true;
        }
        else {
            return false;
        }
    }

    public static clear(): void {
        localStorage.removeItem('petshopuser');
        localStorage.removeItem('petshoptoken');
    }
}
