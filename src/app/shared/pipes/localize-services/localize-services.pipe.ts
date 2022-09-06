import { Pipe, PipeTransform } from '@angular/core';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Pipe({
  name: 'localizeServices',
})
export class LocalizeServicesPipe implements PipeTransform {
  localizedService = {
    [ServiceTitle.CONTENT_PRODUCTION]: $localize`:Photography and videography|:${ServiceTitle.CONTENT_PRODUCTION}`,
    [ServiceTitle.COOPERATIONS]: $localize`:Social media management|:${ServiceTitle.COOPERATIONS}`,
    [ServiceTitle.SOCIAL_MEDIA_MANAGEMENT]: $localize`:Cooperations|:${ServiceTitle.SOCIAL_MEDIA_MANAGEMENT}`,
  };

  transform(services: ServiceTitle[]): string[] {
    return services.map((service) => this.localizedService[service]);
  }
}
