import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: 'contact',
    template: `
       
        <div class="contact">
            <div> 
                <label for="firstname"> Firstname: </label>  
                <input [(ngModel)]="contact.firstname" type="text" id="firstname" />
            </div>
            <div> 
                <label for="lastname"> Lastname: </label>  
                <input [(ngModel)]="contact.lastname" type="text" id="lastname" />
            </div>
            <div> 
                <label for="telefon"> Phonenumber: </label>  
                <input [(ngModel)]="contact.telefon" type="text" id="telefon"  />
            </div>
            <div> 
                <label for="email"> E-Mail: </label> 
                <input [(ngModel)]="contact.email" type="text" id="email" />
            </div>
            <button (click)="createFromContact()">Create new contact from this contact</button>
        </div>
    `,
    inputs: ["contact"]
})

export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {}

    createFromContact() {
        this._router.navigate(['NewContact', {lastname: this.contact.lastname}])
    }
}