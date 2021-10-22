import { Component } from '@angular/core';

import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialogService: DialogService) { }

  openDialog(): void {
    this.dialogService.open();
  }

}
