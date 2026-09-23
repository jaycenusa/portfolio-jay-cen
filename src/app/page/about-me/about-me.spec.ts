import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the design-repo About Me structure', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('// 001 — About Me');
    expect(compiled.querySelector('.about-me__name')?.textContent).toContain('Jay');
    expect(compiled.querySelector('.about-me__name-accent')?.textContent?.trim()).toBe('Cen.');
    expect(compiled.textContent).toContain('Scroll to explore');
  });

  it('should render GitHub, LinkedIn, and Email social links', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('a.social-link') as NodeListOf<HTMLAnchorElement>,
    ).map((anchor) => ({
      text: anchor.textContent?.replace(/\s+/g, ' ').trim(),
      href: anchor.getAttribute('href'),
      hasIcon: Boolean(anchor.querySelector('svg')),
    }));

    expect(links).toContainEqual({
      text: 'GitHub',
      href: 'https://github.com/jaycenusa',
      hasIcon: true,
    });
    expect(links).toContainEqual({
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jay-cen-14903615a',
      hasIcon: true,
    });
    expect(links).toContainEqual({
      text: 'Email',
      href: 'mailto:Jaycenca.github@gmail.com',
      hasIcon: true,
    });
  });

  it('should render a Resume download link', () => {
    const resume = fixture.nativeElement.querySelector('a.resume-link') as HTMLAnchorElement;

    expect(resume).toBeTruthy();
    expect(resume.textContent?.replace(/\s+/g, ' ').trim()).toBe('Resume');
    expect(resume.getAttribute('href')).toBe('Jay_Cen_Frontend_Resume.pdf');
    expect(resume.getAttribute('download')).toBe('Jay_Cen_Frontend_Resume.pdf');
  });

  it('should render stats inside design-style cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.stat-card');

    expect(cards.length).toBe(3);
    expect(compiled.textContent).toContain('Years exp.');
    expect(compiled.textContent).toContain('Stack');
    expect(compiled.textContent).toContain('Based in');
    expect(compiled.textContent).not.toContain('Apps shipped');
  });

  it('should render the LinkedIn profile photo beside the name', () => {
    const photo = fixture.nativeElement.querySelector(
      '.about-me__photo',
    ) as HTMLImageElement;

    expect(photo).toBeTruthy();
    expect(photo.getAttribute('src')).toBe('images/jay-cen-profile.jpg');
    expect(photo.getAttribute('alt')).toBe('Jay Cen');
  });
});
