import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLanguage(language) {
    this.translateService.use(language);
  }

}
