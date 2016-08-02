import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {HTTPTestComponent} from './http-test.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from '././contacts/new-contact.component';
import {NewContactFormbuilderComponent} from '././contacts/new-contact-formbuilder.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar">
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contacts</a>
                <a [routerLink]="['NewContactFormbuilder']">New Contacts with Formbuiler</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>

            <div class="pipes">
                <h2>Date Pipe</h2>
                <div>
                    {{date | date:'fullDate'}}
                </div>
                <h2>Number Pipe</h2>
                <div>
                    {{4.51315456 | number:'1.2-2'}}
                </div>
                <h2>Currency Pipe</h2>
                <div>
                    {{4.51315456 | currency:'EUR':true:'1.2-2'}}
                </div>
                <h2>Stateful Pipe</h2>
                <div>
                    {{radomData | async}}
                </div>
            <div>
        </div>
    `,
    directives: [ContactListComponent, HTTPTestComponent, NewContactComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontacts', name: 'NewContact', component: NewContactComponent},
    {path: '/newcontactsbuilder', name: 'NewContactFormbuilder', component: NewContactFormbuilderComponent},
    
])

export class AppComponent {
    date = new Date();
    radomData = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Random data!'), 2000);
    })
}