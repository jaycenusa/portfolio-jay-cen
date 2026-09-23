import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { socialLinks } from '../../data/portfolio.data';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience'] as const;

type SectionId = (typeof SECTION_IDS)[number];

@Component({
  selector: 'app-home',
  imports: [AboutMe, Skills, Projects, Experience],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly socialLinks = socialLinks;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private observer?: IntersectionObserver;
  private isProgrammaticScroll = false;

  constructor() {
    afterNextRender(() => {
      this.setupSectionObserver();
      this.scrollToFragment(this.route.snapshot.fragment);

      this.route.fragment.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((fragment) => {
        this.scrollToFragment(fragment);
      });
    });

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private setupSectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null,
    );

    if (sections.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.isProgrammaticScroll) {
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const sectionId = visible?.target.id;
        if (!sectionId || this.route.snapshot.fragment === sectionId) {
          return;
        }

        void this.router.navigate([], {
          fragment: sectionId,
          replaceUrl: true,
          queryParamsHandling: 'preserve',
        });
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.55],
      },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  private scrollToFragment(fragment: string | null): void {
    if (!fragment || !this.isSectionId(fragment)) {
      return;
    }

    const target = document.getElementById(fragment);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top;
    const alreadyInView = Math.abs(top) < 80;
    if (alreadyInView) {
      return;
    }

    this.isProgrammaticScroll = true;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.setTimeout(() => {
      this.isProgrammaticScroll = false;
    }, 700);
  }

  private isSectionId(value: string): value is SectionId {
    return (SECTION_IDS as readonly string[]).includes(value);
  }
}
