import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  constructor(public translate: TranslateService) {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  // todo
  changLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
    document.documentElement.lang = language;
  }
}
