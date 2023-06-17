// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ImpedimentsService } from '../impediments.service';

// @Component({
//   selector: 'app-create-impediments',
//   templateUrl: './create-impediments.component.html',
//   styleUrls: ['./create-impediments.component.css']
// })
// export class CreateImpedimentsComponent {
//   impediments: any = {}; // Define your impediments object with the necessary properties

//   constructor(private impedimentsService: ImpedimentsService,
//     private router: Router) {}
  

//     ngOnInit(): void{

//     }

//   submitImpediments() {
//     // Perform the logic to submit the impediment data to the backend API
//     this.impedimentsService.createImpediment(this.impediments)
//   }

//   goToImpediments(){
//     this.router.navigate(['/impediments'])
//   }

//   onSubmit(){
//     console.log(this.impediments);
//     this.submitImpediments();
//   }

//   cancel() {
//     // Navigate to the impediments list page or any other desired route
//     this.router.navigate(['/impediments']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImpedimentsService } from '../impediments.service';

@Component({
  selector: 'app-create-impediments',
  templateUrl: './create-impediments.component.html',
  styleUrls: ['./create-impediments.component.css']
})
export class CreateImpedimentsComponent {
  impediments: any = {}; // Define your impediments object with the necessary properties

  constructor(private impedimentsService: ImpedimentsService,
    private router: Router) {}
  

    ngOnInit(): void{

    }

  submitImpediments() {
    // Perform the logic to submit the impediment data to the backend API
    this.impedimentsService.createImpediment(this.impediments).subscribe( data =>
      {
        console.log(data);
        this.goToImpediments();
      },
      error => console.log(error));
  }

  goToImpediments(){
    this.router.navigate(['/impediments'])
  }

  onSubmit(){
    console.log(this.impediments);
    this.submitImpediments();
  }

  cancel() {
    // Navigate to the impediments list page or any other desired route
    this.router.navigate(['/impediments']);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ImpedimentsService } from '../impediments.service';

// @Component({
//   selector: 'app-create-impediments',
//   templateUrl: './create-impediments.component.html',
//   styleUrls: ['./create-impediments.component.css']
// })
// export class CreateImpedimentsComponent {
//   impediments: any = {}; // Define your impediments object with the necessary properties

//   constructor(private impedimentsService: ImpedimentsService, private router: Router) {}

//   submitImpediments() {
//     // Set the current date
//     this.impediments.date = new Date().toISOString().slice(0, 10);

//     // Perform the logic to submit the impediment data to the backend API
//     this.impedimentsService.createImpediment(this.impediments).subscribe(
//       data => {
//         console.log(data);
//         this.goToImpediments();
//       },
//       error => console.log(error)
//     );
//   }

//   goToImpediments() {
//     this.router.navigate(['/impediments']);
//   }

//   onSubmit() {
//     console.log(this.impediments);
//     this.submitImpediments();
//   }

//   cancel() {
//     this.router.navigate(['/impediments']);
//   }
// }


