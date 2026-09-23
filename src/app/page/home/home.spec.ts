import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render all portfolio section slides', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#about')).toBeTruthy();
    expect(compiled.querySelector('#skills')).toBeTruthy();
    expect(compiled.querySelector('#projects')).toBeTruthy();
    expect(compiled.querySelector('#experience')).toBeTruthy();
  });

  it('should include section content from each portfolio area', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('// 001 — About Me');
    expect(compiled.textContent).toContain('Tech stack');
    expect(compiled.textContent).toContain('Selected work');
    expect(compiled.textContent).toContain('Work history');
  });

  it('should render the design footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.site-footer')).toBeTruthy();
    expect(compiled.textContent).toContain('Built with precision');
  });
});
