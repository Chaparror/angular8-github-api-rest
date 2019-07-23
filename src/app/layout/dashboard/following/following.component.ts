import { Component, OnInit } from '@angular/core';
import {GitRestService} from "../../../shared/services/gitrest.service";

@Component({
    selector: 'app-following',
    templateUrl: './following.component.html',
    styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

    following = [] as any;

    constructor(private _gitService: GitRestService) {
      _gitService.getFollowing().then(res => {
          this.following = res;
      });
    }

    ngOnInit() {}

}
