import { Component } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from 'ngx-bootstrap-modal';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  confirmResult: boolean = null;

  constructor(public dialogService: DialogService) {
  }

  opt: any = {
    title: '',
    content: '',
    icon: '', //success
    size: 'sm',
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    showConfirmButton: true,
    confirmButtonText: 'OK'
  };
  confirm_result: string = '';

  bConfirm() {
    this.dialogService.confirm(this.opt.title || 'Tytuł', this.opt.content || 'Komunikat ？', this.opt).then((res: any) => {
      this.confirm_result = res ? 'OK' : 'Cancel' ;
    });
  }

  showAlert() {
    this.dialogService.addDialog(AlertComponent, { title: 'Alert title!', message: 'Alert message!!!' });
  }

  showConfirm() {
    this.dialogService.addDialog(ConfirmComponent, {
      title: 'Pytanie',
      message: 'Czy usunąć ?'
    })
      .subscribe((isConfirmed) => {
        //Get dialog result
        this.confirmResult = isConfirmed;
      });
  }

  showAlert2() {
    this.dialogService.addDialog(AlertComponent, { message: 'Click outside to close dialog' });
  }

  showAlert5() {
    this.dialogService.addDialog(AlertComponent, { message: 'Click outside only close button' }, { backdrop: 'static' });
  }

  showAlert3() {
    this.dialogService.addDialog(AlertComponent, { message: 'Wait 5 seconds and dialog will be closed automatically' }, { timeout: 5000 });
  }

  showAlert4() {
    this.dialogService.addDialog(AlertComponent, { message: 'Dialog with red backdrop' }, { backdropColor: 'rgba(255, 0, 0, 0.5)' });
  }

}
