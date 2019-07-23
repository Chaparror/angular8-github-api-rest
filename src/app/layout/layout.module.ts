import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from "./components/header/header.component";
import { FlexModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    FlexModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
  providers: []
})
export class LayoutModule {}
