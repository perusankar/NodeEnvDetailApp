
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService ,loginData} from './user.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['/../css/style.css']
})
export class LoginComponent implements OnInit {
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
        this.userservice.login(this.user).then(
            data => {
                if (data.success){
                    localStorage.setItem('currentUser', JSON.stringify(this.user.email));
                    this.router.navigate(['/home']);
                }else{
                    console.log(data);
                    this.message=data.message;
                }
            }
        ).catch(error => alert(error));
    }

}
