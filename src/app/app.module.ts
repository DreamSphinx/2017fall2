import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { InputComponent } from './input/input.component';
import { InputcalComponent } from './inputcal/inputcal.component';
import { InputexeComponent } from './inputexe/inputexe.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './progress/progress.component';
import { TipsComponent } from './tips/tips.component';
import { ExerciseService } from './models/exercise.service';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { List } from './models/exercise';
import { Session } from './models/exercise';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    InputComponent,
    InputcalComponent,
    InputexeComponent,
    LoginComponent,
    ProgressComponent,
    TipsComponent,
    LoggedinComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "", pathMatch: "full", redirectTo: "/home"},
      { path: "input", component: InputComponent },
      { path: "input/inputcal", component: InputcalComponent },
      { path: "input/inputexe", component: InputexeComponent },
      { path: "login", component: LoginComponent },
      { path: "progress", component: ProgressComponent },
      { path: "tips", component: TipsComponent },
      { path: "loggedin", component: LoggedinComponent },
    ])
  ],
  providers: [ ExerciseService, HeaderComponent, LoginComponent, List, Session],
  bootstrap: [AppComponent]
})
export class AppModule { }
