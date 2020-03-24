import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from './app.component-interface';

@Injectable()
export class Service {
    constructor(private _http : HttpClient) { }

    public async doLogin(user:ILogin){
        try{
            let result = await this._http.post('localhost:3000/login',{"user":user.login, "password":user.password})
            .toPromise().then(response => response).catch(error => error).finally();
            return result;
        }catch(e){
            throw (e);
        }
    }
  }