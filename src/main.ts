import {
	enableProdMode,
	NgModuleRef
} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SudokuAppModule} from './app/app.module';
import {environment} from './environments/environment';
import {hmrBootstrap} from './hmr';

if (environment.production) {
	enableProdMode();
}

const bootstrap: any = (): Promise<NgModuleRef<SudokuAppModule>> => platformBrowserDynamic().bootstrapModule(SudokuAppModule);

if (environment.hmr.isEnabled) {
	if (module['hot']) {
		hmrBootstrap(module, bootstrap);
	}
	else {
		console.error('HMR is not enabled for webpack-dev-server !');
		console.log('Are you using the --hmr flag for ng serve ?');
	}
}
else {
	bootstrap().catch((err: any) => console.log(err));
}
