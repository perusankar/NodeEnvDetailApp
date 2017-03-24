"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var RegisterComponent = (function () {
    function RegisterComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            email: '',
            password: ''
        };
        this.message = '';
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this.userservice.signup(this.user).then(function (data) {
            if (data.success) {
                _this.message = '';
                _this.router.navigate(['/login']);
            }
            else {
                console.log(data);
                _this.message = data.message;
            }
        }).catch(function (error) { return alert(error); });
    };
    RegisterComponent.prototype.regiter = function () {
        this.router.navigate(['/register']);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.html',
            styleUrls: ['/../css/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map