import { Component, OnInit } from '@angular/core';
import {GitRestService} from "../../../shared/services/gitrest.service";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects = [] as any;

    constructor(private _gitService: GitRestService) {
      _gitService.getProjects().then(res => {
          this.projects = res;
      });
    }

    ngOnInit() {}

}
