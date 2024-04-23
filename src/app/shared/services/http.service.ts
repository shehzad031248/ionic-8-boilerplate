import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
  // httpClient: HttpClient;
  baseUrl: string = environment.apiUrl;
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  appendToken(token: string) {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
  }

  httpGet(endpoint: string = '', queryValues: string = '', httpOptions: any = this.httpOptions): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + endpoint + (queryValues ? '/' + queryValues : ''), httpOptions);
  }

  httpPost(endpoint: string = '', data: any, httpOptions: any = this.httpOptions): Observable<any> {
    //console.log(endpoint, JSON.stringify(data));
    return this.httpClient.post(this.baseUrl + '/' + endpoint, data, httpOptions);
  }

  httpPut(endpoint: string = '', data: any, httpOptions: any = this.httpOptions): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + endpoint, data, httpOptions);
  }

  httpDelete(endpoint: string = '', queryValues: string = '', httpOptions: any = this.httpOptions): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + endpoint + (queryValues ? '/' + queryValues : ''), httpOptions);
  }
}
