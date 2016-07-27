import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'new-contact',
    template: `
       <h1>New Contact</h1>
        <form #myForm="ngForm" class="contact" (ngSubmit)="onSubmit()">
            <div> 
                <label for="firstname"> Firstname: </label>  
                <input type="text" id="firstname" 
                    ngControl="firstname" 
                    [(ngModel)]="newContact.firstname" 
                    required />
            </div>
            <div> 
                <label for="lastname"> Lastname: </label>  
                <input type="text" id="lastname" 
                    ngControl="lastname" 
                    [(ngModel)]="newContact.lastname" 
                    required/>
            </div>
            <div> 
                <label for="telefon"> Phonenumber: </label>  
                <input type="text" id="telefon"  
                    ngControl="telefon" 
                    [(ngModel)]="newContact.telefon" 
                    required />
            </div>
            <div> 
                <label for="email"> E-Mail: </label> 
                <input type="text" id="email" 
                    ngControl="email" 
                    [(ngModel)]="newContact.email" 
                    required />
            </div>
            <button type="submit">Create Contact</button>
        </form>
    `,
    providers: [ContactService]
})

export class NewContactComponent implements OnInit {
    newContact: Contact;

    constructor(
        private _contactService: ContactService, 
        private _router: Router,
        private _routeParams: RouteParams) {}

    onSubmit() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.newContact = {
            firstname: "",
            lastname: this._routeParams.get('lastname'),
            telefon: "",
            email: "",
        };
    }
}