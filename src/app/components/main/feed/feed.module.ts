import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { ResizeModule } from 'src/app/directives/resize/resize.module';
import { TooltipErrorModule } from 'src/app/directives/tooltip-error/resize.module';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { FeedComponent } from './feed.component';
@NgModule({
  bootstrap: [
    FeedComponent
  ],
  declarations: [
    FeedComponent,
    AddFeedComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    ReactiveFormsModule,
    ResizeModule,
    ConfirmDialogModule,
    TooltipModule,
    TooltipErrorModule,
    NgxLoadingModule,
  ],
  exports: [
    FeedComponent,
    AddFeedComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class FeedModule { }
