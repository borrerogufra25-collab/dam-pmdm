import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  // Prepara el componente raiz y un enrutador sin rutas para las pruebas.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  // Comprueba que Angular puede crear el componente principal.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  // Verifica que la barra de navegacion contiene los enlaces esperados.
  it('should render the navigation links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.nav-link'),
    ).map((a) => a.textContent?.trim());
    expect(links).toEqual(['Pokémon', 'Berries', 'Items']);
  });
});
