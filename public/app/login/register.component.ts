
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.html',
    styleUrls: ['/../css/style.css']
})
export class RegisterComponent implements OnInit {
    public user: User;
    public message: String;
    constructor(
        private router: Router,
        private userservice: UserService) { }


    ngOnInit() {
        this.user = {
            email: '',
            password: ''
        };
        this.message='';
    }


    onSubmit() {
        console.log(this.user);
        this.userservice.signup(this.user).then(
            data => {
                if (data.success) {
                    this.message='';
                    this.router.navigate(['/login']);
                } else {
                    console.log(data);
                    this.message=data.message;
                }
            }
        ).catch(error => alert(error));
    }

    regiter() {
        this.router.navigate(['/register']);
    }

}

