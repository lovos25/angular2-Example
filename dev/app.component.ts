import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from '././contacts/new-contact.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contacts</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ContactListComponent, NewContactComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontacts', name: 'NewContact', component: NewContactComponent},
])

export class AppComponent {
    
}