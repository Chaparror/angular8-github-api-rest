import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {RepositoriesComponent} from "./repositories/repositories.component";
import {FlexModule} from "@angular/flex-layout";
import {FollowingComponent} from "./following/following.component";
import {ProjectsComponent} from "./projects/projects.component";
import {FollowersComponent} from "./followers/followers.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FlexModule
  ],
    declarations: [
      RepositoriesComponent,
      FollowingComponent,
      FollowersComponent,
      ProjectsComponent,
    ],
  providers: [],
})
export class DashboardModule {}
