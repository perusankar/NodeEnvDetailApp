import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private userUrl = 'user/';  // URL to web api

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    
    signup(user: User): Promise<loginData> {
        return this.http.post(Config.API_ENDPOINT+this.userUrl+'signup',
             JSON.stringify(user),
            {
                headers: this.headers
            })
            .toPromise()
            .then(response => response.json() as loginData)
            .catch(this.handleError);
    }    


    login(user: User): Promise<loginData> {
        return this.http.post(Config.API_ENDPOINT+this.userUrl+'loginValidate',
             JSON.stringify(user),
            {
                headers: this.headers
            })
            .toPromise()
            .then(response => response.json() as loginData)
            .catch(this.handleError);
    }    

}


export interface  User {
         email: string
         password: string
}


export class  loginData {
         success: boolean
         message: string
}