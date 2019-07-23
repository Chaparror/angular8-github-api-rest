import { Component, OnInit } from '@angular/core';
import {GitRestService} from "../../../shared/services/gitrest.service";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers = [] as any;

  constructor(private _gitService: GitRestService) {
    _gitService.getFollowers().then(res => {
      this.followers = res;
    });
  }

  ngOnInit() {}

}
