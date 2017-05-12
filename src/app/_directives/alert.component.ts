import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

/**
 * Alert Component
 *
 * This alert component passes alert messages to the template whenever a message is received from the alert service.
 * It does this by subscribing to the alert services's getMessage() method which returns an Observable.
 */
@Component({
    moduleId: module.id.toString(),
    selector: 'alert', /* define the name of this component */
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}