import {Routes} from '@angular/router';

export const SUDOKU_APP_ROUTES: Routes = [
	{
		path        : 'home',
		loadChildren: './views/home/home.module#SudokuHomeViewModule'
	},
	{
		path      : '',
		redirectTo: 'home',
		pathMatch : 'full'
	}
];
