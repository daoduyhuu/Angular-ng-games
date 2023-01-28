import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '9dca3df028mshbb04fa2bc90089bp1187c8jsn2c8c55193c6b',
            },
            setParams: {
                key: '1967078eb0504174bbe6652ce56f1b39',
            }
        });
        return next.handle(req);
    }
}