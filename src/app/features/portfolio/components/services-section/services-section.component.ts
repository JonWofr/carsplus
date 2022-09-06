import { Component, OnInit } from '@angular/core';
import { Service } from '@features/portfolio/models/service.model';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Component({
  selector: 'portfolio-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  // An additional meaning has to be added for the translator. Otherwise for whatever reason the translator can't
  // differentiate the different strings and generates only one trans-unit
  readonly services: Service[] = [
    {
      iconUrl: '/assets/icons/photography-videography-icon.svg',
      title: $localize`:Content production|:${ServiceTitle.CONTENT_PRODUCTION}`,
      description: $localize`Von individuellen Katalogbildern bis hin zum umfangreichen Imagefilm: Wir übernehmen es!`,
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: $localize`:Social media management|:${ServiceTitle.SOCIAL_MEDIA_MANAGEMENT}`,
      description: $localize`Durch unser strategisches Know-how bieten wir das gesamte Spektrum für einen erfolgreichen Social Media Auftritt. <br> <br> Zu <a href="https://moveupmedia.de/" target="_blank">moveUP Media</a>`,
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: $localize`:Cooperations|:${ServiceTitle.COOPERATIONS}`,
      description: $localize`Mehr Reichweite erzielen, Produkte oder Dienstleistungen via Social Media bewerben? - Durch eine Kooperation mit uns können sie hunderttausende Menschen erreichen.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
