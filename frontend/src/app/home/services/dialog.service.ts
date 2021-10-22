import { Injectable } from '@angular/core';

import go from '../../../wailsjs/bindings';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  open(): void {
    go.main.App.ShowDialog();
  }
}
