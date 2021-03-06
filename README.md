# Basic Angular Architecture
It is a skeleton architecture to bootstrap a maintainable and reusable/extendable Angular project.

## Instalation
After clone this repository you will need to run `npm i` to install all dependencies.
After that, to customize your project, you will need to rename `example` modules/components/folders to fit in your specific project name. Besides that, you will need to replace all references to `example` in the `angular.json` file to your specific project name too.

![Structure Diagram](https://github.com/andrefillypesilva/basic-angular-architecture/blob/master/projects/example-app/structure_diagram.svg?raw=true)

## How to run
You can see this application online [here](https://andrefillypesilva.github.io/basic-angular-architecture/)!
To run this application in your local environment you will need only run `npm start` as defined in the package.json file or run `ng serve` as defined in Angular documentation.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
