import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Skills heading and category cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('// 002 — Skills');
    expect(compiled.textContent).toContain('Tech stack');
    expect(compiled.querySelectorAll('.skill-card').length).toBeGreaterThan(0);
  });

  it('should render skill chips for each category', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Frameworks & Libraries');
    expect(compiled.textContent).toContain('Angular');
    expect(compiled.textContent).toContain('PostgreSQL');
    expect(compiled.textContent).toContain('MongoDB');
    expect(compiled.textContent).toContain('IBM DB2');
    expect(compiled.textContent).not.toContain('Next.js');
    expect(compiled.textContent).not.toContain('GraphQL');
    expect(compiled.textContent).not.toContain('Supabase');
    expect(compiled.querySelectorAll('.skill-chip').length).toBeGreaterThan(0);
  });
});
