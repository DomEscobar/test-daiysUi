import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StartComponent },
      { path: ':id', component: StartComponent },
    ]),
  ],
  declarations: [AppComponent, StartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
