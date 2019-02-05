import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from "@angular/forms";
import { WorkComponent } from './work/work.component';
import { WorkFormComponent } from './work-form/work-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    WorkComponent,
    WorkFormComponent

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
