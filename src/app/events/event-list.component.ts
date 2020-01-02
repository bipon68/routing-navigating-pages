
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div>
    <h2>Upcoming Angular Evnets</h2>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>
                <!-- <event-thumbnail (eventClick)="handleEventClick($event)"  [event]="event"></event-thumbnail> -->
            </div>
        </div>
    </div>
    `
})


export class EventListComponent implements OnInit{

    events: any;

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){}

    ngOnInit(){
        // this.events = this.route.snapshot.data['events']
        this.eventService.getEvents().subscribe(events => {
            this.events = events
        });
    }
    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
    handleEventClick(data){
        console.log('Received data from child component: ', data);
    }

}