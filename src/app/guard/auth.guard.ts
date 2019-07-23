import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlSegment,
  Router, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {GitRestService} from "../shared/services/gitrest.service";
import {LoginService} from "../shared/services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _gitService: GitRestService,private router: Router, private _loginService: LoginService) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (!this._gitService.currrentUser) {
      this.router.navigate(['/login']);
      return false;
    }else {
      return this._gitService.getUser().then( (res: Response )  => {
        this._gitService.name = (<any>res).name;
        this._gitService.avatar_url = (<any>res).avatar_url;
        this._loginService.loginError.emit(undefined);
        return true;
      }).catch( err => {
        this._loginService.loginError.emit('Error user/pass');
        return false;
      });
    }

  }
}
