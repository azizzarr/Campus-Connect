import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { RegisterModule } from './auth/register-page/register/register.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {FournisseurListComponent} from "./components/instructor/instructor-dashboard/fournisseur-list.component";
import {FournisseurFilterPipePipe} from "./fournisseur-filter-pipe.pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {AddFournisseurComponent} from "./components/instructor/instructor-social-profiles/add-fournisseur.component";
import {EditFournisseurComponent} from "./components/instructor/instructor-payouts/edit-fournisseur.component";
import {AddNgoComponent} from "./components/instructor/instructor-orders/add-ngo.component";
import {NgoListComponent} from "./components/instructor/instructor-tickets/ngo-list.component";
import {NgoStatsComponent} from "./components/instructor/instructor-security/ngo-stats.component";
import {PagesModule} from "./components/pages/pages.module";
@NgModule({
  declarations: [AppComponent,
    FournisseurListComponent,
    FournisseurFilterPipePipe,
    AddFournisseurComponent,
    EditFournisseurComponent,
    AddNgoComponent,
    NgoListComponent,
    NgoStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RegisterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
