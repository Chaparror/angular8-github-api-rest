import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from "./repositories/repositories.component";
import {AuthGuard} from "../../guard/auth.guard";
import {FollowingComponent} from "./following/following.component";
import {ProjectsComponent} from "./projects/projects.component";
import {FollowersComponent} from "./followers/followers.component";

const routes: Routes = [
    { path: '', redirectTo: 'repository', pathMatch: 'prefix' },
    {path: 'repository',canActivate: [AuthGuard], component: RepositoriesComponent},
    {path: 'following',canActivate: [AuthGuard], component: FollowingComponent},
    {path: 'followers',canActivate: [AuthGuard], component: FollowersComponent},
    {path: 'projects',canActivate: [AuthGuard], component: ProjectsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
