import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.API_URL;
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjg2MDgzMDk1LCJzdWIiOiJjMWJhNzE3My1lOWMzLTQ2NWYtYWYyMS1mZWJlNmI0MDRlOTIiLCJlbWFpbCI6InNvcnJlbnRpbm9zYXJhMjhAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2ODYwNzk0OTV9XSwic2Vzc2lvbl9pZCI6IjI1MGYzNGMwLWMyNGUtNGI5OC04NzA5LWM4MzFhYjBhODA3MCJ9.gMTI75En5OntpnA52t6Ad19vUfdEteKvdY6GvUpDiDo'
    })
  }

  constructor(private http: HttpClient) { }

  getUser(userId: String): Observable<any> {
    console.log(this.http.get(`${this.API_URL}/users/${userId}`, this.httpOptions));
    return;
  }

}
