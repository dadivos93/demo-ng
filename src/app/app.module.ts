import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainFooterComponent,
    MainSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
