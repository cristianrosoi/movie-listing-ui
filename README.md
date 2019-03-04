# MovieListingUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

It can use [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction).

In order to make use of the API, the app requires an API Key to be provided in the src\app\config.ts

If you don't provide an API Key it will still run, but on some mocked data which is served from the src\assets folder.

## Demo version

There is a demo version of this app that runs some mocked data and it's hosted on [github pages](https://cristianrosoi.github.io/movie-listing-ui/).

## Running a local copy

Clone or download the project then run:

```js
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Test files have a *.spec.ts file extension.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## App architecture

Here is a short list of some important files and folders

```
|-/src
|--/app
|---/components
|     |--/footer
|     |--/header
|     |--/home
|     |--/loader
|     |--/movie-listing
|---/shared
|     |--/constants
|     |--/models
|     |--/pipes
|     |--/services
|     |--/utils
|---app-routing.module.ts
|---app.component.css
|---app.component.html
|---app.component.spec.ts
|---app.component.ts
|---app.module.ts
|---app.config.ts
|--/assets
|--index.html
|--style.css
|-package.json
```

The components are stored in /src/app/components and each component have a own folder i.e. /header, /footer etc.

```
Each component folder have 4 files inside:
  -> *.component.css => style file
  -> *.component.html => template file
  -> *.component.spec.ts => test file
  -> *.component.ts => logic file
```

Other files which get imported in the components are kept in the /src/app/shared folder and depending on their purpose there are more subfolders such as: 

```
  /constants (i.e. of usecase -> strings that need to be imported in different places)
    -> constants.ts
    -> service-urls.constant.ts ==> API paths and mocked paths

  /models (i.e. of usecase -> modeling the responses of the API)
  
  /pipes (i.e. of usecase -> angular customs pipes): 
    -> filter-listings.pipe.ts  ==> filter the movie listings array
    -> print-genre.pipe.ts      ==> match a genre id with it's name

  /services (i.e. of usecase -> angular services):
    -> configuration.service.ts ==> calls [Configuration Api](https://developers.themoviedb.org/3/configuration/get-api-configuration).
    -> genres.service.ts        ==> calls [Genres Api](https://developers.themoviedb.org/3/genres/get-movie-list).
    -> now-playing.service.ts   ==> calls [Now Playing Api](https://developers.themoviedb.org/3/movies/get-now-playing).

  /utils (i.e. of usecase -> specific methods which can be used anywhere in the app):
    -> buildUrl.util.ts         ===> return the full URL used in the API calls - used if API KEY is provided
                                ===> Note: if no API KEY is provided, the mocked urls are defined in service-urls.constant.ts
    -> mobileCheck.util.ts      ===> checks if the user is using a mobile device
```

The root component is the app.component.ts

```
Config.ts
  BASE_URL: 'https://api.themoviedb.org',
  VERSION: '3',
  API_KEY: '', // provide here an API KEY from The Movie Database
  LANGUAGE: 'en-US',
  PAGE: '&page=1'
```

```
Assets folder
  -> mocked-configuration.json
  -> mocked-genres.json
  -> mocked-get-movie-now-playing.json
```

Google Font is added in the index.html file -> [Quicksand](https://fonts.google.com/?query=quicksand).

Style.css is a global css file which applies to all components.
