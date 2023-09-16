import { Component } from '@angular/core';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  selectedMenuOption = 1
  showUserOptions = false

  constructor(private router: Router) {}

  ngOnInit() {
    const element = (document.getElementById("input") as HTMLInputElement)
    window.onblur = (e: any) => {
      this.dontShowUserOptions()
    }
  }

  setSelectedMenuOption(c: number) {
    this.selectedMenuOption = c
  }

  onActivate(component: Component) {
    if(component instanceof DashbordComponent) {
      this.setSelectedMenuOption(1)
    } else {
      this.setSelectedMenuOption(2)
    }
  }

  startShowUserOptions() {
    this.showUserOptions = !this.showUserOptions
  }

  dontShowUserOptions() {
    this.showUserOptions = false
  }

  logout() {
    this.dontShowUserOptions()
    this.router.navigate(["/ap/signin"])
  }

  showProfile() {
    this.dontShowUserOptions()
    this.router.navigate(["/user/profile"])
  }
}
