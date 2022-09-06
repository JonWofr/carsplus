import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'portfolio-business-figure-block',
  templateUrl: './business-figure-block.component.html',
  styleUrls: ['./business-figure-block.component.scss'],
})
export class BusinessFigureBlockComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() count: number = 0;
  @Input() subtitle: string = '';
  @Input() note: string = '';

  @ViewChild('countElement')
  countHeading?: ElementRef<HTMLHeadingElement>;
  @ViewChild('businessFigureBlock')
  businessFigureBlock?: ElementRef<HTMLElement>;

  private readonly intersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');

          if (!this.countHeading) return;
          const countUp = new CountUp(
            this.countHeading.nativeElement,
            this.count,
            {
              separator: this.localeId === 'de' ? '.' : ',',
              duration: Math.random() + 2,
            }
          );
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '-64px 0px -64px 0px',
      threshold: 0,
    }
  );

  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.businessFigureBlock) return;
    this.intersectionObserver.observe(this.businessFigureBlock.nativeElement);
  }

  ngOnDestroy(): void {
    if (!this.businessFigureBlock) return;
    this.intersectionObserver.unobserve(this.businessFigureBlock.nativeElement);
  }
}
