import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Route  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';
import { ProductComponent } from './product/product.component';
import { HistoryloginComponent } from './historylogin/historylogin.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { CounterComponent } from './counter/counter.component';
import { DetailHistoryComponent } from './detail-history/detail-history.component';
import { KunjunganTokoComponent } from './kunjungan-toko/kunjungan-toko.component';
import { KunjunganBerhasilComponent } from './kunjungan-berhasil/kunjungan-berhasil.component';
import { FreezerComponent } from './freezer/freezer.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { FilterProductPipe } from './filter-product.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterKunjungantokoPipe } from './pipe/filter-kunjungantoko.pipe';
import { FilterCounterPipe } from './pipe/filter-counter.pipe';
import { FilterDetailhistoryPipe } from './pipe/filter-detailhistory.pipe';
import { FilterKunjunganberhasilPipe } from './pipe/filter-kunjunganberhasil.pipe';
import { FilterHistoryPipe } from './pipe/filter-history.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    NavbarSidebarComponent,
    ProductComponent,
    HistoryloginComponent,
    UpdatepasswordComponent,
    CounterComponent,
    DetailHistoryComponent,
    KunjunganTokoComponent,
    KunjunganBerhasilComponent,
    FreezerComponent,
    LayoutMainComponent,
    FilterProductPipe,
    FilterKunjungantokoPipe,
    FilterCounterPipe,
    FilterDetailhistoryPipe,
    FilterKunjunganberhasilPipe,
    FilterHistoryPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,    
    RouterModule.forRoot([
        { path: '',component: LoginComponent },
        { path: 'login',component: LoginComponent },
        { 
          path: 'layout', 
          component: LayoutMainComponent, 
          children:[
            { path: '',component: DashboardComponent },
            { path: 'dashboard',component: DashboardComponent },
            { path: 'navbar', component: NavbarComponent },
            { path: 'product', component: ProductComponent },
            { path: 'historylogin', component: HistoryloginComponent },
            { path: 'updatepassword', component: UpdatepasswordComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'counter/:id', component: DetailHistoryComponent },
            { path: 'kunjunganToko', component: KunjunganTokoComponent },
            { path: 'kunjunganToko/:id', component: KunjunganBerhasilComponent },
            { path: 'kunjunganBerhasil/:id', component: FreezerComponent },
          ] },
    ]),
    CommonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
