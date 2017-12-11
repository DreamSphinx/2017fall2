import { BrowserModule } from '@angular/platform-browser';
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
import { RegisterComponent } from './register/register.component';
import { TipsComponent } from './tips/tips.component';
import { ExerciseService } from './models/exercise.service';


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
    RegisterComponent,
    TipsComponent
  ],
  imports: [
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
      { path: "register", component: RegisterComponent },
      { path: "tips", component: TipsComponent }
    ])
  ],
  providers: [ ExerciseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
