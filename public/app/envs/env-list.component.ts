
import { Component, OnInit } from '@angular/core';
import { Env, EnvService } from './env.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'env-list',
  templateUrl: './env-list.component.html',
  styleUrls: [ '/../css/style.css' ]
})
export class EnvListComponent implements OnInit {
  envs: Env[];
  selectedEnv: Env;

  constructor(
    private router: Router,
    private service: EnvService) { }

  getEnvs(): void {
    this.service
      .getEnvs()
      .then(envs => this.envs = envs);
  }

  ngOnInit() {
    this.getEnvs();
  }


  onSelectURL(env: Env) {
      open(env.url);
  }  

  onSelect(env: Env) {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser){
      this.selectedEnv = env;
      this.router.navigate(['/envdetail', env._id]);
    }else{
      alert('Permission Denied.');
    }
  }
}

