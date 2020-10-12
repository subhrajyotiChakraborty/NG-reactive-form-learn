import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DataTransferService } from './data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataTransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
