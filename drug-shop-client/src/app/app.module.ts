import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrugListComponent } from './drugs/drug-list/drug-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './common/common.module';
import { CardComponent } from './drugs/card/card.component';
import { ContentLoaderComponent } from './drugs/content-loader/content-loader.component';
import { CartComponent } from './cart/cart.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DrugListComponent,
    CardComponent,
    ContentLoaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzNoAnimationModule,
    AppRoutingModule,
    NzMenuModule,
    NzIconModule,
    NzSpaceModule,
    NzCardModule,
    NzAvatarModule,
    NzSkeletonModule,
    CommonModule,
    NzGridModule,
    NzBadgeModule,
    NzImageModule,
    NzEmptyModule,
    NzPopconfirmModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
