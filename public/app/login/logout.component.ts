
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'logout',
  template: `
    <section>
      <h3>{{message}}</h3>
    </section>
  `})
export class LogoutComponent implements OnInit {

public message: String;

    constructor(
        private router: Router) { }


    ngOnInit() {
        let remsg =localStorage.getItem('currentUser');
        if(remsg){
            localStorage.removeItem('currentUser');
            this.message="Logged out.";
            console.log("Removed sessions.");
        }else{
            this.message="No session to logged out.";
            console.log("No sessions to remove.");
        }
    }

}

