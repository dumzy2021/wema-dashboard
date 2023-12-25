import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from 'src/app/icons.provider.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzMenuModule,
    SharedModule,
  ],
})
export class MainModule {}
