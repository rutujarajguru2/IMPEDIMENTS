import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  deleteIssue(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/v1/issue';

  constructor(private http: HttpClient) { }

  getIssue(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createIssue(issue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, issue);
  }
}
