import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';

export interface AlertModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  // templateUrl: './alert.component.html',
  // styleUrls: ['./alert.component.css']
  template: `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">{{title || 'Alert!'}}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="close()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{message || 'TADAA-AM!'}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="close()">OK</button>
      </div>
    </div>
  </div>`
})
export class AlertComponent extends DialogComponent<AlertModel, null> implements AlertModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}
