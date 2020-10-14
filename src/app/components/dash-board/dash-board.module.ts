import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { PreFixerPipe } from 'src/app/pre-fixer.pipe';
import { ColorItDirective } from 'src/app/color-it.directive';

@NgModule({
    imports: [CommonModule, DashBoardRoutingModule],
    declarations: [DashBoardComponent, PreFixerPipe, ColorItDirective]
})

export class DashBoardModule { }
