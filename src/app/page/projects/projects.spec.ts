import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Projects heading and list', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('// 003 — Projects');
    expect(compiled.textContent).toContain('Selected work');
    expect(compiled.querySelectorAll('.project-row').length).toBeGreaterThan(0);
  });

  it('should link each project row to its preview URL', () => {
    const firstRow = fixture.nativeElement.querySelector('.project-row') as HTMLAnchorElement;

    expect(firstRow).toBeTruthy();
    expect(firstRow.getAttribute('href')).toContain('http');
    expect(firstRow.getAttribute('target')).toBe('_blank');
  });
});
