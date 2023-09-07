import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucideAngularModule, Moon } from 'lucide-angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersModule } from './access-control/users.module';
import { PresentationModule } from './presentation/presentation.module';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PresentationModule,
    UsersModule,
    TodoModule,
    AppRoutingModule,
    LucideAngularModule.pick({Moon}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
