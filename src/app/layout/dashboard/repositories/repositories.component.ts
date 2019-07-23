import { Component, OnInit } from '@angular/core';
import {GitRestService} from "../../../shared/services/gitrest.service";

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  /**
   * No indague mucho en el api rest de git, para obtener solo los repositorios privados, publicos o por tipo, por
   * lo que la lògica de filtrar los datos esta en typescript
   */

    repos = [] as any;
    originalRepo = {} as any;

    currentType = 'all';
    types = [] as any;
    currentAccess = 'all';

    constructor(private _gitService: GitRestService) {
      _gitService.getRepos().then(res => {
        this.repos = res;
        this.originalRepo = res;
        this.repos.forEach( item => {
          if (item.language && this.types.indexOf(item.language) === -1)
             this.types.push(item.language);
        });
      });
    }

    ngOnInit() {}

    getRepositories() {
        this.repos = this.originalRepo;
        if (this.currentType !== 'all') {
            this.repos = this.repos.filter (item => {
              return item.language === this.currentType;
            });
        }
        if (this.currentAccess !== 'all') {
            this.repos = this.repos.filter (item => {
              return item.private === (this.currentAccess === 'private')? true: false;
            });
        }
    }

    setType(type) {
      this.currentType = type;
      this.getRepositories();
    }

    setAccess(type) {
      this.currentAccess = type;
      this.getRepositories();
    }


}
