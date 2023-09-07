import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './presentation-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LucideAngularModule, Moon } from 'lucide-angular';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule.pick({Moon}),
  ]
})
export class PresentationModule { }
