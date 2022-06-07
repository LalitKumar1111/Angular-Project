import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ForgetComponent } from './forget/forget.component';
import { Forget1Component } from './forget1/forget1.component';
import { Forget2Component } from './forget2/forget2.component';
import { Forget3Component } from './forget3/forget3.component';
import { PwdsuccessComponent } from './pwdsuccess/pwdsuccess.component';
import { PlannerComponent } from './planner/planner.component';
import { Planner1Component } from './planner1/planner1.component';
import { AuthGuard } from './auth.guard';
// import { Log2Service } from './log2.service';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogregComponent,
    RegisterComponent,
    HomeComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    ForgetComponent,
    Forget1Component,
    Forget2Component,
    Forget3Component,
    PwdsuccessComponent,
    PlannerComponent,
    Planner1Component,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
