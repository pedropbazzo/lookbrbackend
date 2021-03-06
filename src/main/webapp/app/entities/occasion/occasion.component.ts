import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Occasion } from './occasion.model';
import { OccasionService } from './occasion.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-occasion',
    templateUrl: './occasion.component.html'
})
export class OccasionComponent implements OnInit, OnDestroy {
occasions: Occasion[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private occasionService: OccasionService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.occasionService.query().subscribe(
            (res: ResponseWrapper) => {
                this.occasions = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOccasions();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Occasion) {
        return item.id;
    }
    registerChangeInOccasions() {
        this.eventSubscriber = this.eventManager.subscribe('occasionListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
