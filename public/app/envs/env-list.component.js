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
var env_service_1 = require('./env.service');
var router_1 = require('@angular/router');
var EnvListComponent = (function () {
    function EnvListComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    EnvListComponent.prototype.getEnvs = function () {
        var _this = this;
        this.service
            .getEnvs()
            .then(function (envs) { return _this.envs = envs; });
    };
    EnvListComponent.prototype.ngOnInit = function () {
        this.getEnvs();
    };
    EnvListComponent.prototype.onSelectURL = function (env) {
        open(env.url);
    };
    EnvListComponent.prototype.onSelect = function (env) {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.selectedEnv = env;
            this.router.navigate(['/envdetail', env._id]);
        }
        else {
            alert('Permission Denied.');
        }
    };
    EnvListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'env-list',
            templateUrl: './env-list.component.html',
            styleUrls: ['/../css/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, env_service_1.EnvService])
    ], EnvListComponent);
    return EnvListComponent;
}());
exports.EnvListComponent = EnvListComponent;
//# sourceMappingURL=env-list.component.js.map