/*import { Component } from '@angular/core';

@Component({
  selector: 'app-create-impediments',
  templateUrl: './create-impediments.component.html',
  styleUrls: ['./create-impediments.component.css']
})
export class CreateImpedimentsComponent {
  impediments: any = {}; // Create an object to hold the form data

  submitImpediments() {
    // You can perform any actions with the form data here, such as submitting it to a server or processing it further
    console.log(this.impediments);
  }
}     http://localhost:8080/api/v1/impediment
*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-impediments',
  templateUrl: './create-impediments.component.html',
  styleUrls: ['./create-impediments.component.css']
})
export class CreateImpedimentsComponent {
  impediments: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  submitImpediments() {
    this.http.post('http://localhost:8080/api/v1/impediment', this.impediments)
      .subscribe(
        (response) => {
          console.log(response); // Log the response from the backend
          // Perform any additional actions after successful creation
          this.router.navigate(['http://localhost:4200/impediments']); // Redirect to the impediment-list page
        },
        (error) => {
          console.error(error); // Log any errors that occur
          // Handle the error as needed
        }
      );
  }
}
