import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SudokuHeaderFeatureModule} from 'sudoku/features/header/header.module';
import {SudokuAppComponent} from './app.component';
import {SUDOKU_APP_ROUTES} from './app.routes';

@NgModule({
	declarations: [
		SudokuAppComponent
	],
	imports     : [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(SUDOKU_APP_ROUTES),
		SudokuHeaderFeatureModule
	],
	providers   : [],
	bootstrap   : [
		SudokuAppComponent
	]
})

export class SudokuAppModule {
}
