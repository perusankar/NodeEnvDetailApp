import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Env, EnvService } from './env.service';

@Component({
  moduleId: module.id,
  selector: 'envdetail',
  templateUrl: './env-detail.component.html',
  styleUrls: ['/../css/style.css']
})
export class EnvDetailComponent implements OnInit {

  public env: Env;

  constructor(
    private router: ActivatedRoute,
    private envservice: EnvService,
    private location: Location) { }

  ngOnInit(): void {
    this.router.params
      .switchMap((params: Params) => this.envservice.getEnv(params['_id']))
      .subscribe(env => this.env = env);
  }

  save(): void {
    this.envservice.update(this.env)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}