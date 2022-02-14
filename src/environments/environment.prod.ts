// This file can be replaced during build by using the`fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  application: {
    name: 'angular-starter',
    angular: 'Angular 13.1.1',
    bootstrap: 'Bootstrap 5.1.3',
    fontawesome: 'Font Awesome 5.15.4',
  },
  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json' 
    /* urlNews: 'http://localhost:5004/trailers', */,
    // url: 'https://api.ganatan.com/tutorials',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */ 
    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/' 
     /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true, 
    url: 'http://localhost:5004/', */,
  },
};
