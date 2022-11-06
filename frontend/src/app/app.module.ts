import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FormsModule} from "@angular/forms";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MassageComponent } from './massage/massage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TaskDetailComponent,
    MassageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
