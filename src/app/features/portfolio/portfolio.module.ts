import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { ProjectGalleryItemComponent } from './components/project-gallery-item/project-gallery-item.component';
import { SharedModule } from '@shared/shared.module';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectDetailSlideshowComponent } from './components/project-detail-slideshow/project-detail-slideshow.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';
import { BusinessFiguresSectionComponent } from './components/business-figures-section/business-figures-section.component';
import { BusinessFigureBlockComponent } from './components/business-figure-block/business-figure-block.component';

@NgModule({
  // Necessary for the usage of custom HTML elements (e.g. lottie-files) (which are not angular elements)
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ServiceCardComponent,
    ProjectsSectionComponent,
    ProjectGalleryComponent,
    ProjectGalleryItemComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
    ProjectDetailComponent,
    ProjectDetailSlideshowComponent,
    NewsSectionComponent,
    ImpressumComponent,
    DataPrivacyComponent,
    BusinessFiguresSectionComponent,
    BusinessFigureBlockComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule, FormsModule],
})
export class PortfolioModule {}
