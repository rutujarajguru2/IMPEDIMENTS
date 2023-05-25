/* import { Component } from '@angular/core';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent {
  issue: any = {}; // Create an object to hold the form data

  submitIssue() {
    // You can perform any actions with the form data here, such as submitting it to a server or processing it further
    console.log(this.issue);
  }
} */
import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent {
  issue: any;
  // Component properties

  constructor(private http: HttpClient) {}



  submitIssue() {
    // Make sure to replace 'your-backend-api-url' with the actual URL of your backend API endpoint
    const apiUrl = 'http://localhost:8080/api/v1/impediments';
  
    // Prepare the issue data from your form
    const issueData = {
      issueId: this.issue.issueId,
      title: this.issue.title,
      description: this.issue.description,
      priority: this.issue.priority,
      status: this.issue.status,
      date: this.issue.date,
      raisedBy: this.issue.raisedBy,
      assignedTo: this.issue.assignedTo,
      sprint: this.issue.sprint
    };
  
    // Make the HTTP POST request
    this.http.post(apiUrl, issueData)
      .subscribe(
        response => {
          console.log('Issue created successfully:', response);
          // Handle success, such as displaying a success message or redirecting to a different page
        },
        error => {
          console.error('Error creating issue:', error);
          // Handle error, such as displaying an error message or logging the error
        }
      );
  }
  
}
