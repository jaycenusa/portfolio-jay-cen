import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the JC logo in the navigation', () => {
    const logo = fixture.nativeElement.querySelector('img[alt="JC Logo"]') as HTMLImageElement;

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toBe('images/JC-logo.png');
  });

  it('should link the logo to the about slide', () => {
    const logoLink = fixture.nativeElement.querySelector(
      'a[aria-label="Jay Cen logo"]',
    ) as HTMLAnchorElement;

    expect(logoLink).toBeTruthy();
    expect(logoLink.getAttribute('href')).toBe('/#about');
  });

  it('should render section tabs with fragment links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = Array.from(compiled.querySelectorAll('.site-nav__link')).map((anchor) => ({
      text: anchor.textContent?.trim(),
      href: anchor.getAttribute('href'),
    }));

    expect(navLinks).toContainEqual({ text: 'about', href: '/#about' });
    expect(navLinks).toContainEqual({ text: 'skills', href: '/#skills' });
    expect(navLinks).toContainEqual({ text: 'projects', href: '/#projects' });
    expect(navLinks).toContainEqual({ text: 'experience', href: '/#experience' });
  });

  it('should toggle the mobile menu', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggle = compiled.querySelector('.site-nav__menu-toggle') as HTMLButtonElement;

    expect(toggle).toBeTruthy();
    expect(compiled.querySelector('#mobile-nav')).toBeNull();

    toggle.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#mobile-nav')).toBeTruthy();
    expect(fixture.componentInstance.menuOpen).toBe(true);
  });
});
