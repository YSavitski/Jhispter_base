import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { RfbLoyaltySharedModule, UserRouteAccessService } from './shared';
import { RfbLoyaltyAppRoutingModule} from './app-routing.module';
import { RfbLoyaltyHomeModule } from './home/home.module';
import { RfbLoyaltyAdminModule } from './admin/admin.module';
import { RfbLoyaltyAccountModule } from './account/account.module';
import { RfbLoyaltyEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RfbLoyaltyAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RfbLoyaltySharedModule,
        RfbLoyaltyHomeModule,
        RfbLoyaltyAdminModule,
        RfbLoyaltyAccountModule,
        RfbLoyaltyEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RfbLoyaltyAppModule {}
