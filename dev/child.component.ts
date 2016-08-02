import {Component} from 'angular2/core';


@Component({
    selector: 'child',
    template :  `
        <br/><br/><br/>
        <button (click)="onTestGet()">Test GET Request</button><br/>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test POST Request</button>
        <p>Output: {{postData}}</p>
    `,
    providers: [HTTPTestService] 
})

export class ChildComponent {

}