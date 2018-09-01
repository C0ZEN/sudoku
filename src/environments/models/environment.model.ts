import {SudokuEnvironmentHmr} from './environment-hmr.model';

export abstract class SudokuEnvironment {
	public abstract production: boolean;
	public abstract hmr: SudokuEnvironmentHmr;
}
