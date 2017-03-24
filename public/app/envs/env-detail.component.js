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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var env_service_1 = require('./env.service');
var EnvDetailComponent = (function () {
    function EnvDetailComponent(router, envservice, location) {
        this.router = router;
        this.envservice = envservice;
        this.location = location;
    }
    EnvDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .switchMap(function (params) { return _this.envservice.getEnv(params['_id']); })
            .subscribe(function (env) { return _this.env = env; });
    };
    EnvDetailComponent.prototype.save = function () {
        var _this = this;
        this.envservice.update(this.env)
            .then(function () { return _this.goBack(); });
    };
    EnvDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    EnvDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'envdetail',
            templateUrl: './env-detail.component.html',
            styleUrls: ['/../css/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, env_service_1.EnvService, common_1.Location])
    ], EnvDetailComponent);
    return EnvDetailComponent;
}());
exports.EnvDetailComponent = EnvDetailComponent;
//# sourceMappingURL=env-detail.component.js.map