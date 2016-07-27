import {Component, Input} from 'angular2/core';

@Component({
    selector: 'new-contact',
    template: `
       
        <div>
            <div> 
                <label for="firstname"> Firstname: </label>  
                <input type="text" id="firstname" />
            </div>
            <div> 
                <label for="lastname"> Lastname: </label>  
                <input type="text" id="lastname" />
            </div>
            <div> 
                <label for="telefon"> Phonenumber: </label>  
                <input type="text" id="telefon"  />
            </div>
            <div> 
                <label for="email"> E-Mail: </label> 
                <input type="text" id="email" />
            </div>
        </div>
    `,
    inputs: ["contact"]
})

export class NewContactComponent {
    public contact: {};
}