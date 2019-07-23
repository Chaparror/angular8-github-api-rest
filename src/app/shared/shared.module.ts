import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitRestService } from "./services/gitrest.service";
import { HttpClientModule } from "@angular/common/http";
import {LoginService} from "./services/login.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [GitRestService, LoginService]
    };
  }
}
