import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    constructor(private _http : HttpClient) { }

    public async getCurrentTime()
    {
        try
        {
            let result = await this._http.get('http://date.jsontest.com')  
            .toPromise().then(response => response).catch(error => error).finally();
            return result;
        }
        catch(e)
        {
            throw (e);
        }
    }
  }