import { Component, OnInit } from '@angular/core';

type BusinessFigure = {
  count: number;
  subtitle: string;
  note: string;
};

@Component({
  selector: 'portfolio-business-figures-section',
  templateUrl: './business-figures-section.component.html',
  styleUrls: ['./business-figures-section.component.scss'],
})
export class BusinessFiguresSectionComponent implements OnInit {
  businessFigures: BusinessFigure[] = [
    {
      count: 1350000,
      subtitle: $localize`Interaktionen`,
      note: $localize`in den letzten 14 Tagen auf Instagram`,
    },
    {
      count: 18800000,
      subtitle: $localize`Impressionen`,
      note: $localize`in den letzten 14 Tagen auf Instagram`,
    },
    {
      count: 320000,
      subtitle: $localize`Follower`,
      note: $localize`insgesamt auf Instagram`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
