import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('Experience', () => {
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Experience section heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('// 004 — Experience');
    expect(compiled.textContent).toContain('Work history');
  });

  it('should render work experience entries with bullets', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Software Engineer');
    expect(compiled.textContent).toContain('Rogers Telecommunications Inc.');
    expect(compiled.textContent).toContain('IBM Canada');
    expect(compiled.textContent).toContain('Scotiabank');
    expect(compiled.textContent).toContain('Oct 2022 — June 2025');
    expect(compiled.querySelectorAll('.experience-item').length).toBe(4);
    expect(compiled.querySelectorAll('.experience-item__bullets li').length).toBeGreaterThan(0);
  });
});
