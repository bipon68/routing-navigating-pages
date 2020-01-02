import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `        
        <div [routerLink]="['/events', event.id]"
            class="well thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" 
            [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online Url: {{event?.onlineUrl}}
            </div>
            <!-- <button class="btn btn-primary" (click)="handleClickMe()"> Click Me</button> -->
        </div>

    `,
    styles : [`
        .green{color: green !important}
        .bold{font-weight: bold;}
        .thumbnail{min-height: 210px;}
    `]
})
export class EventThumbnailComponent{
    @Input() event: any;
    @Output() eventClick = new EventEmitter;
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold'
        // return ''
        //const isEarlyStart = this.event && this.event.time === '8:00 am'
        //return {green: isEarlyStart, bold: isEarlyStart}
    }
    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
    handleClickMe(){
        // this.eventClick.emit('Foo');
        this.eventClick.emit(this.event.name);
        //console.log('Clicked');
    }

    

}