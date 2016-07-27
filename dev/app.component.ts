import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Addressbook</h1>
        <ul>
            <li *ngFor="#contact of contacts">{{contact.firstname}} {{contact.lastname}}</li>
        </ul>
    `,
})

export class AppComponent {
    contacts = [
        {firstname: "Max", lastname: "Müller", phonenumber: "12345667", email: "max.mueller@test.de"},
        {firstname: "Tina", lastname: "Müller", phonenumber: "12345667", email: "tine.mueller@test.de"},
        {firstname: "Chris", lastname: "Mustermann", phonenumber: "12345667", email: "chris.mustermann@test.de"},
        {firstname: "Caro", lastname: "Ela", phonenumber: "12345667", email: "caro.ela@test.de"},
        {firstname: "Peet", lastname: "Hase", phonenumber: "12345667", email: "peet.hase@test.de"}
    ];
}