import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(["en", "de"]);
    this.translate.setDefaultLang(this.translate.langs[0]);
  }

  updateLanguage(event: any): void {
    this.translate.use(event.target.value);
  }
}
