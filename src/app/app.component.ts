import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _number: number = 0;
  _select: string;

  _result: boolean;


  numberChange(num: number) {
    if (this._number < 0) this._number = 0;
    this.caculate();
  }

  selectChange(str: string) {
    console.log(str);
    this.caculate();
  }

  isPrime(n) {
    {
      if (n === 1) {
        return false;
      }
      else if (n === 2) {
        return true;
      } else {
        for (var x = 2; x < n; x++) {
          if (n % x === 0) {
            return false;
          }
        }
        return true;
      }
    }
  }
  isFibonacci(num) {
    if(num === 0 || num === 1){
      return true;
   }
   let prev = 1;
   let count = 2;
   let temp = 0;
   while(count <= num){
      if(prev + count === num){
         return true;
      };
      temp = prev;
      prev = count;
      count += temp;
   };
   return false;
  }
  caculate() {
    if (this._number < 0) this._number = 0;

    if (this._select == "1") {
      this._result = this.isPrime(this._number);
    } else {
      this._result = this.isFibonacci(this._number);
    }
    console.log(this._result)
  }
}


