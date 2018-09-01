import {Routes} from '@angular/router';
import {SudokuHomeViewComponent} from 'sudoku/views/home/home.component';

export const SUDOKU_HOME_ROUTES: Routes = [
	{
		path     : '',
		component: SudokuHomeViewComponent
	}
];
