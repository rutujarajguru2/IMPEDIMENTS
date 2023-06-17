// import { Component, OnInit } from '@angular/core';
// import { ImpedimentsService } from '../impediments.service';
// import { Router } from '@angular/router';
// import { CreateImpedimentsComponent } from '../create-impediments/create-impediments.component';

// @Component({
//   selector: 'app-impediments',
//   templateUrl: './impediments.component.html',
//   styleUrls: ['./impediments.component.css'],
//   providers: [ImpedimentsService] // Register the service provider
// })
// export class ImpedimentsComponent implements OnInit {
//   updateImpediments(arg0: any){
//     throw new Error('Method not implemented.');
//   }
//   createImpediments: any;
//   dialog: any;
//   deleteImpediments(arg0: any) {
//     throw new Error('Method not implemented.');
//   }
//   impediments: any[] = [];
//   displayedColumns: string[] = ['impedimentId', 'title', 'description', 'priority', 'status', 'date', 'raisedBy', 'assignedTo', 'sprint'];

//   constructor(private impedimentsService: ImpedimentsService, private router: Router) { }

//   ngOnInit() {
//     this.fetchImpediments();
//   }

  

//   fetchImpediments() {
//     this.impedimentsService.getImpediments().subscribe((data: any[]) => {
//       this.impediments = data;
//       console.log(this.impediments);
//     });
//   }

  
  
// }

import { Component, OnInit } from '@angular/core';
import { ImpedimentsService } from '../impediments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impediments',
  templateUrl: './impediments.component.html',
  styleUrls: ['./impediments.component.css'],
  providers: [ImpedimentsService] // Register the service provider
})
export class ImpedimentsComponent implements OnInit {
  impediments: any[] = [];
  displayedColumns: string[] = ['impedimentId', 'title', 'description', 'priority', 'status', 'date', 'raisedBy', 'assignedTo', 'sprint'];

  constructor(private impedimentsService: ImpedimentsService, private router: Router) { }

  ngOnInit() {
    this.fetchImpediments();
  }

  fetchImpediments() {
    this.impedimentsService.getImpediments().subscribe((data: any[]) => {
      this.impediments = data;
      console.log(this.impediments);
    });
  }

  updateImpediments(impedimentId: number) {
    // Logic to update the impediment with the specified impedimentId
  }

  deleteImpediments(impedimentId: number) {
    // Logic to delete the impediment with the specified impedimentId
  }
}

