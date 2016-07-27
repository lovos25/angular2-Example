import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'new-contact',
    template: `
       <h1>New Contact</h1>
        <div class="contact">
            <div> 
                <label for="firstname"> Firstname: </label>  
                <input type="text" id="firstname" #firstname />
            </div>
            <div> 
                <label for="lastname"> Lastname: </label>  
                <input type="text" id="lastname" #lastname value="{{oldLastname}}"/>
            </div>
            <div> 
                <label for="telefon"> Phonenumber: </label>  
                <input type="text" id="telefon"  #telefon />
            </div>
            <div> 
                <label for="email"> E-Mail: </label> 
                <input type="text" id="email" #email />
            </div>
            <button (click)="onAddContact(firstname.value, lastname.value, telefon.value, email.value)" >Create Contact</button>
        </div>
    `,
    providers: [ContactService]
})

export class NewContactComponent implements OnInit {
    public oldLastname = "";
    constructor(
        private _contactService: ContactService, 
        private _router: Router,
        private _routeParams: RouteParams) {}

    onAddContact(firstname, lastname, telefon, email) {
        let contact: Contact = {
            firstname: firstname,
            lastname: lastname,
            telefon: telefon,
            email: email
        }

        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.oldLastname = this._routeParams.get('lastname');
    }
}