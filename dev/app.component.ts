import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Addressbook</h1>
        <contact-list></contact-list>
    `,
    directives: [ContactListComponent]
})

export class AppComponent {
    
}