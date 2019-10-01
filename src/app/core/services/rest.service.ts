import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
    this.baseUrl = '';
  }
  protected baseUrl: string;

  protected httpOptions: object = {};

  private static getResponseData(response: any): any {
    return {
      code: response.code || null,
      payload: response.payload ? response.payload : response || null
    };
  }

  private static isRelativeUrl(url: string): boolean {
    const isNotRelativeUrlRegExp: RegExp = /^https?:\/\//;

    return !isNotRelativeUrlRegExp.test(url);
  }

  public get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    const options: object = {
      ...this.httpOptions,
      params
    };

    return this.http
      .get(this.getEndPointUrl(url), options)
      .pipe(
        map(RestService.getResponseData)
      );
  }

  public post(url: string, body?: {}): Observable<any> {
    return this.http
      .post(
        this.getEndPointUrl(url), body,
        this.httpOptions
      )
      .pipe(
        map(RestService.getResponseData)
      );
  }

  public delete(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    const options: object = {
      ...this.httpOptions,
      params
    };

    return this.http
      .delete(this.getEndPointUrl(url), options)
      .pipe(
        map(RestService.getResponseData)
      );
  }

  private getEndPointUrl(url: string): string {

    return RestService.isRelativeUrl(url)
      ? `${this.baseUrl.replace(/\/+$/, '')}/${url.replace(/^\/|\/$/, '')}`
      : `${url.replace(/^\/|\/$/, '')}`;
  }
}
