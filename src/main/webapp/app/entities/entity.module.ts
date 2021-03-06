import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RfbLoyaltyRfbLocationModule } from './rfb-location/rfb-location.module';
import { RfbLoyaltyRfbEventModule } from './rfb-event/rfb-event.module';
import { RfbLoyaltyRfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { RfbLoyaltyRfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        RfbLoyaltyRfbLocationModule,
        RfbLoyaltyRfbEventModule,
        RfbLoyaltyRfbEventAttendanceModule,
        RfbLoyaltyRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbLoyaltyEntityModule {}
