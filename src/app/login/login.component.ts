import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GitRestService} from "../shared/services/gitrest.service";
import {LoginService} from "../shared/services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username = 'kodemiaChallenge';
    password = 'Challenge8#';

    errorLabel;

    constructor(private router: Router, private _gitService: GitRestService, private _loginService: LoginService) {
       _loginService.loginError.subscribe( evt => {
         this.errorLabel = evt;
       })
    }

    ngOnInit() {}

    login() {
      this._gitService.currrentUser = btoa(this.username + ':' + this.password);
      this.router.navigate(['']);
    }

}
