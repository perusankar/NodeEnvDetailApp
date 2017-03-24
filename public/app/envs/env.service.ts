import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EnvService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private envsUrl = 'api/envs';  // URL to web api

    constructor(private http: Http) { }

    getEnvs(): Promise<Env[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(Config.API_ENDPOINT+this.envsUrl,
            {
                headers: headers
            })
            .toPromise()
            .then(response => response.json() as Env[])
            .catch(this.handleError);
    }

    getEnv(id: number): Promise<Env> {
        console.log(id);
        const url = Config.API_ENDPOINT+this.envsUrl+'/'+id;
         console.log(url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Env)
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    update(env: Env): Promise<Env> {
        const url = `${this.envsUrl}/${env._id}`;
        return this.http
            .put(url, JSON.stringify(env), { headers: this.headers })
            .toPromise()
            .then(() => env)
            .catch(this.handleError);
    }

}


export class Env {
    constructor(
        public _id: number
        , public name: string
        , public url: string
        , public desc: string
        , public date: string
        , public __v: number
    ) { }
}

