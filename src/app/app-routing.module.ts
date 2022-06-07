import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ForgetComponent } from './forget/forget.component';
import { Forget1Component } from './forget1/forget1.component';
import { Forget2Component } from './forget2/forget2.component';
import { Forget3Component } from './forget3/forget3.component';
import { PwdsuccessComponent } from './pwdsuccess/pwdsuccess.component';
import { PlannerComponent } from './planner/planner.component';
import { Planner1Component } from './planner1/planner1.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"",component:LogregComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot",component:ForgetComponent,children:[{path:'',component:Forget1Component}]},
  {path:"forgot",component:ForgetComponent,children:[{path:'forgot2',component:Forget2Component}]},
  {path:"forgot",component:ForgetComponent,children:[{path:'forgot3',component:Forget3Component}]},
  {path:"forgot",component:ForgetComponent,children:[{path:'forgot3',component:Forget3Component}]},
  {path:"pwdsuccess",component:PwdsuccessComponent},
  // {path:"dasboard",component:DashboardComponent},

  {path:"login",canActivate:[AuthGuard],component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[{path:'',component:HomeComponent}]},
  {path:"dashboard",component:DashboardComponent,children:[{path:'portfolio',component:PortfolioComponent}]},
  {path:"dashboard",component:DashboardComponent,children:[{path:'about',component:AboutComponent}]},
  {path:"dashboard",component:DashboardComponent,children:[{path:'contact',component:ServicesComponent}]},
  {path:"dashboard",component:DashboardComponent,children:[{path:'planner',component:PlannerComponent}]},
  {path:"dashboard",component:DashboardComponent,children:[{path:'planner1',component:Planner1Component}]},
  {path:"**",component:NotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LogregComponent,LoginComponent,RegisterComponent,DashboardComponent,HomeComponent,PortfolioComponent,AboutComponent,PlannerComponent,Planner1Component,ForgetComponent,Forget1Component,Forget2Component,Forget3Component,NotfoundComponent]
