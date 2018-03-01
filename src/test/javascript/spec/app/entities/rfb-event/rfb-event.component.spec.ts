/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { RfbLoyaltyTestModule } from '../../../test.module';
import { RfbEventComponent } from '../../../../../../main/webapp/app/entities/rfb-event/rfb-event.component';
import { RfbEventService } from '../../../../../../main/webapp/app/entities/rfb-event/rfb-event.service';
import { RfbEvent } from '../../../../../../main/webapp/app/entities/rfb-event/rfb-event.model';

describe('Component Tests', () => {

    describe('RfbEvent Management Component', () => {
        let comp: RfbEventComponent;
        let fixture: ComponentFixture<RfbEventComponent>;
        let service: RfbEventService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [RfbLoyaltyTestModule],
                declarations: [RfbEventComponent],
                providers: [
                    RfbEventService
                ]
            })
            .overrideTemplate(RfbEventComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RfbEventComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RfbEventService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new RfbEvent(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.rfbEvents[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
