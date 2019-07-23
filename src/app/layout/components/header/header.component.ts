import {AfterViewChecked, Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {GitRestService} from "../../../shared/services/gitrest.service";
import {LoginService} from "../../../shared/services/login.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    name;
    avatar_url;

    constructor(private router: Router, private _gitService: GitRestService) {
      this.name = _gitService.name;
      this.avatar_url = _gitService.avatar_url;
    }

    ngOnInit() {
    }

    navigateTo(value) {
      this.router.navigate([value]);
    }

    singOut() {
      this._gitService.currrentUser = undefined;
      this.router.navigate(['login']);
    }
}
