import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { EmployeeService } from './employee.service';
import { FeaturesEmployeeComponent } from './features-employee/features-employee.component';
import { ServiceEmployeeService } from './service-employee.service';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'update/:id', component:UpdateComponent},
  {path: '**', component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    FeaturesEmployeeComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    AboutUsComponent,
    UpdateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ServiceEmployeeService,
    EmployeeService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
