import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RegionComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    MatCardModule
  ]
})
export class RegionModule { }
