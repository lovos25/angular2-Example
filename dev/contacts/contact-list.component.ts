import { Component } from 'angular2/core';
import {ContactComponent} from './contact.component'

@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts" 
            (click)="onSelect(contact)"
            [class.clicked]="selectedContact === contact">{{contact.firstname}} {{contact.lastname}}</li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent]
})

export class ContactListComponent {
    public selectedContact = {};
    contacts = [
        {firstname: "Max", lastname: "Müller", phonenumber: "12345667", email: "max.mueller@test.de"},
        {firstname: "Tina", lastname: "Müller", phonenumber: "12345667", email: "tine.mueller@test.de"},
        {firstname: "Chris", lastname: "Mustermann", phonenumber: "12345667", email: "chris.mustermann@test.de"},
        {firstname: "Caro", lastname: "Ela", phonenumber: "12345667", email: "caro.ela@test.de"},
        {firstname: "Peet", lastname: "Hase", phonenumber: "12345667", email: "peet.hase@test.de"}
    ];

    onSelect(contact) {
        this.selectedContact = contact;
    }
}