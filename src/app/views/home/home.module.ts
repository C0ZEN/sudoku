import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SudokuHomeViewComponent} from 'sudoku/views/home/home.component';
import {SUDOKU_HOME_ROUTES} from 'sudoku/views/home/home.routes';

@NgModule({
	declarations: [
		SudokuHomeViewComponent
	],
	imports     : [
		CommonModule,
		RouterModule.forChild(SUDOKU_HOME_ROUTES)
	]
})

export class SudokuHomeViewModule {
}
