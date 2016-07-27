import {Component, Input} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
        <input [ngModel]="contact.firstname" type="text"/>
        <div>
            Phonenumber: {{contact.phonenumber}} <br />
            E-Mail: {{contact.email}}
        </div>
    `,
    inputs: ["contact"]
})

export class ContactComponent {
    public contact: {};
}