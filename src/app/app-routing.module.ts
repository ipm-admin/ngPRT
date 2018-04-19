import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GuidedTourComponent } from './guided-tour/guided-tour.component';
import { FaqComponent } from './faq/faq.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'guided-tour', component: GuidedTourComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'log-in', component: LogInComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'team-members', component: TeamMembersComponent
  },
  {
    path: 'workspace', component: WorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
