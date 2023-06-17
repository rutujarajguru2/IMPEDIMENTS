// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ImpedimentsService {
//   private apiUrl = 'http://localhost:8080/api/v1/impediment'; // Corrected API URL

//   constructor(private http: HttpClient) { }

//   getImpediments(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   createImpediment(impediment: any){
//    console.log(impediment) // return this.http.post<any>(this.apiUrl, impediment); // Corrected HTTP POST request
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImpedimentsService {
  private apiUrl = 'http://localhost:8080/api/v1/impediment'; // Corrected API URL

  constructor(private http: HttpClient) { }

  getImpediments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // createImpediment(impediment: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, impediment); // Corrected HTTP POST request
  // }

  createImpediment(impediment: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/impediment', impediment);
  }
  
}
