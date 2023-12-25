import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() customClass: string = '';
  @Input() loader: boolean = false;
  @Input() message: string = 'Loading, please wait....';
}
