import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggingService } from './logging.service';
import { HttpClient , HttpClientModule} from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , LoggingService , HttpClient , HttpClientModule ] 
};
