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
var http_1 = require('@angular/http');
var config_1 = require('../config');
require('rxjs/add/operator/toPromise');
var EnvService = (function () {
    function EnvService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.envsUrl = 'api/envs'; // URL to web api
    }
    EnvService.prototype.getEnvs = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(config_1.Config.API_ENDPOINT + this.envsUrl, {
            headers: headers
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EnvService.prototype.getEnv = function (id) {
        console.log(id);
        var url = config_1.Config.API_ENDPOINT + this.envsUrl + '/' + id;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EnvService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EnvService.prototype.update = function (env) {
        var url = this.envsUrl + "/" + env._id;
        return this.http
            .put(url, JSON.stringify(env), { headers: this.headers })
            .toPromise()
            .then(function () { return env; })
            .catch(this.handleError);
    };
    EnvService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EnvService);
    return EnvService;
}());
exports.EnvService = EnvService;
var Env = (function () {
    function Env(_id, name, url, desc, date, __v) {
        this._id = _id;
        this.name = name;
        this.url = url;
        this.desc = desc;
        this.date = date;
        this.__v = __v;
    }
    return Env;
}());
exports.Env = Env;
//# sourceMappingURL=env.service.js.map