import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { GuidedTourComponent } from './guided-tour/guided-tour.component';
import { FaqComponent } from './faq/faq.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SiteComponent } from './workspace/sites/site/site.component';
import { SitesService } from './sites.service';
import { SitesComponent } from './workspace/sites/sites.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    GuidedTourComponent,
    FaqComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    TeamMembersComponent,
    WorkspaceComponent,
    SiteComponent,
    SitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    SitesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
