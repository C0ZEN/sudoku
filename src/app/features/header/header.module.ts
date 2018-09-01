import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SudokuHeaderFeatureComponent} from 'sudoku/features/header/header.component';

@NgModule({
	declarations: [
		SudokuHeaderFeatureComponent
	],
	exports     : [
		SudokuHeaderFeatureComponent
	],
	imports     : [
		CommonModule
	]
})

export class SudokuHeaderFeatureModule {
}
