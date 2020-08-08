import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerCreateComponent } from './container-create/container-create.component';
import { ContainerSearchDeleteComponent } from './container-search-delete/container-search-delete.component';
import { ContainerService } from './container.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerCreateComponent,
    ContainerSearchDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
