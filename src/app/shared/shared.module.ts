import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LoaderComponent } from './components/loader/loader.component';

let components: any = [ButtonComponent, SearchInputComponent, LoaderComponent];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    NzInputNumberModule,
    NzButtonModule,
    AngularSvgIconModule.forRoot(),
    NzSpaceModule,
    NzDatePickerModule,
    NzModalModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NzIconModule,
  ],
  exports: [
    ...components,
    AngularSvgIconModule,
    NzDatePickerModule,
    NzButtonModule,
    NzModalModule,
    NzToolTipModule,
    NzPopconfirmModule,
  ],
})
export class SharedModule {}
