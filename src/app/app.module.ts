import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LucideAngularModule, Moon } from 'lucide-angular';
import { LoginComponent } from './login/login.component';
import { FormTextInputComponent } from './form-elements/form-text-input/form-text-input.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    FormTextInputComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({Moon})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
