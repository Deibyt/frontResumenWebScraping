// Importación de las clases necesarias para realizar pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importación del componente que se va a probar
import { ReviewComponent } from './review.component';

// Descripción del conjunto de pruebas para ReviewComponent
describe('ReviewComponent', () => {
  // Declaración de variables para el componente y su fixture
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      imports: [ReviewComponent]
    })
    .compileComponents();
    
    // Creación de una instancia del componente para las pruebas
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    // Detección de cambios iniciales en el componente
    fixture.detectChanges();
  });

  // Prueba unitaria para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});