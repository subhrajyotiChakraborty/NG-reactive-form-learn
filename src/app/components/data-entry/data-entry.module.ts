import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry.component';


@NgModule({
    imports: [CommonModule, DataEntryRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [DataEntryComponent]
})

export class DataEntryModule { }
