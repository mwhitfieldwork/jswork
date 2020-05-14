import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //1. How would you verify a prime number?
    //console.log(this.isPrime(237))
  }

  isPrime(n){
    var divisor = 2;
    while(n > divisor){
      if(n % divisor ==  0){
        return false;
      }else{
        divisor++;
      }
      return true;
    }
  }

}
