import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  id: string = 'btn-id-' + Math.round(Math.random() * 100000);
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() nzGhost: boolean = false;
  @Input() customClass: string = '';
  @Input() routerLink: string = '';
  @Input() btnText: string = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Output() onButtonClick = new EventEmitter<any>();

  constructor(private router: Router) {}
  onBtnClick() {
    if (this.routerLink) {
      this.router.navigate([this.routerLink]);
    }
    this.onButtonClick.emit();
  }
}
