import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DataTransferService } from './data-transfer.service';
import { PreFixerPipe } from './pre-fixer.pipe';
import { ColorItDirective } from './color-it.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    DashBoardComponent,
    PreFixerPipe,
    ColorItDirective
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
