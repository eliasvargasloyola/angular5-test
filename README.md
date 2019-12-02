# Angular 5

## WARNING 
First you must be installed NodeJS server [Get NodeJS](https://nodejs.org/en/download/)


## Installation Angular CLI

1. Install and use Angular CLI. [Oficial Link](https://cli.angular.io/)
    
   ```bash
   npm uninstall -g angular-cli
   npm uninstall -g @angular/cli
   npm cache clean
   
   #This install the angular CLI support Angular 5
   #For use the latest replace 1.6.1 for latest
   npm install -g @angular/cli@1.6.1
   ```

2. After you install Angular CLI, you can use the generator codes.

    ```bash
    ng g pipe filter-name
    ng g service service-name
    ng g component component-name
    ng g class domain-class-name
    ```
 You can see all types generate in the follow link [ng generate](https://angular.io/cli/generate#ng-generate)
 

## First Steps

Create and use my first app in Angular 5

```bash
   ng new my-fist-app
   cd my-first-app
   ng serve --poll=2000
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

You can find all directives avalibles in Angular [here](https://angular.io/api/common#directives)


## License
[MIT](https://choosealicense.com/licenses/mit/)
