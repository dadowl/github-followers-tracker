// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of, retry} from 'rxjs';
import {GithubUser} from "./github-user";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root',
})
export class FollowersService {
  constructor(private http: HttpClient) { }

  getData(apiUrl: string): Observable<GithubUser[] | null> {
    return this.http.get<GithubUser[] | null>(apiUrl).pipe(
      catchError((err)=> {
        console.log("Request error:", err);
        return of(null);
      })
    );
  }
}
