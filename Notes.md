# Angular 5

## WARNING 
First you must be installed NodeJS server [Get NodeJS](https://nodejs.org/en/download/)


## Installation Angular CLI

1. Install and use Angular CLI. [Oficial Link](https://cli.angular.io/)
    
   ```bash
   npm uninstall -g angular-cli
   npm uninstall -g @angular/cli
   npm cache clean
   npm install -g @angular/cli@latest
   ```

## First Steps

Create and use my first app in Angular 5

```bash
   ng new my-fist-app
   cd my-first-app
   ng serve
```

After your running this code, you can go to this url

- http://localhost:4200/

### Components in Angular 5

Un componente es un pedazo de código que representa solo una parte de nuestro programa.

Todo Componente se define un nombre, una vista .html y un estilo de la vista .css que será definido en su decorador

### Decorators

Los decoradores nos permiten definir atributos o cargar datos en nuestro componentes.

Example

```angular2
   @Component({
     selector: 'app-root', // Here I defined the name
     templateUrl: './app.component.html', // Here I defined the UI template
     styleUrls: ['./app.component.css'] // Here its defined the stylus of the template
   })
``` 
### Create new components

Its recommend create one folder by each component your create.

You can create your componente with Angular CLI executing the following code in your prompt.

I recommend using this, because Angular CLI created the basics files and added the component import in own files as necesary.

```bash
ng generate component component-name
```

Before you create the new component you must use this in any template, calling your new component.

```html
<component-name></component-name>
```

## Directives

### Conditional Directives

1. ngIf

### Bucle Directives

1. ngFor

## License
[MIT](https://choosealicense.com/licenses/mit/)
