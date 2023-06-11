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

  getRoles(): Observable<any> {
    return this.http.get(`${this.API_URL}/roles`, this.httpOptions);
  }

  isRegistered(email: String): Observable<any> {
    return this.http.get(`${this.API_URL}/users/isRegistered/${email}`, this.httpOptions);
  }

  getTeam(): Observable<any> {
    return this.http.get(`${this.API_URL}/teams`, this.httpOptions);
  }

  getTeamMembers(teamId: String): Observable<any> {
    return this.http.get(`${this.API_URL}/teams/${teamId}/members`, this.httpOptions);
  }

  getTeamMember(teamId: String, userId: String): Observable<any> {
    return this.http.get(`${this.API_URL}/teams/${teamId}/members/${userId}`, this.httpOptions);
  }

  getGallery(): Observable<any> {
    return this.http.get(`${this.API_URL}/gallery`, this.httpOptions);
  }

  getDocuments(): Observable<any> {
    return this.http.get(`${this.API_URL}/documents`, this.httpOptions);
  }

  getEvents(): Observable<any> {
    return this.http.get(`${this.API_URL}/events`, this.httpOptions);
  }

  deleteEvent(eventId: String): Observable<any> {
    return this.http.delete(`${this.API_URL}/events/${eventId}`, this.httpOptions);
  }

  deleteImage(imageId: String): Observable<any> {
    return this.http.delete(`${this.API_URL}/gallery/${imageId}`, this.httpOptions);
  }

  deleteDocument(documentId: String): Observable<any> {
    return this.http.delete(`${this.API_URL}/documents/${documentId}`, this.httpOptions);
  }

  removeUserFromTeam(teamId: String, userId: String): Observable<any> {
    return this.http.delete(`${this.API_URL}/teams/${teamId}/members/${userId}`, this.httpOptions);
  }

  addTeamMember(teamId: String, userId: String): Observable<any> {
    return this.http.post(`${this.API_URL}/teams/${teamId}/members/${userId}`, {}, this.httpOptions);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users`, user, this.httpOptions);
  }

  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.API_URL}/events`, event, this.httpOptions);
  }

  getDepartments(teamId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/departments`, this.httpOptions);
  }

  createDepartment(department: any): Observable<any> {
    return this.http.post(`${this.API_URL}/departments`, department, this.httpOptions);
  }

  getDepartment(departmentId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/departments/${departmentId}`, this.httpOptions);
  }

  deleteDepartment(departmentId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/departments/${departmentId}`, this.httpOptions);
  }
}
