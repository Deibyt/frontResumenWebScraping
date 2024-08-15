import { Component } from '@angular/core';
import { ReviewComponent } from './review/review.component';

// Componente principal de la aplicación
@Component({
  // Selector CSS que se usa para insertar este componente en el HTML
  selector: 'app-root',
  // Indica que este es un componente independiente (standalone)
  standalone: true,
  // Importa otros componentes que se usan en este componente
  imports: [ReviewComponent],
  // Plantilla HTML del componente, que simplemente incluye el componente ReviewComponent
  template: '<app-review></app-review>'
})
export class AppComponent { }