import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SharedLibComponent, OtherComponent, NavMenuComponent],
  imports: [
    AuthLibModule,
    RouterModule,
  ],
  exports: [SharedLibComponent, OtherComponent, NavMenuComponent]
})
export class SharedLibModule { }
