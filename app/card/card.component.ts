import { Component } from '@angular/core';

@Component({
    moduleId:    module.id,                 // Used to locate external files for the template
    selector:    'app-card',
    templateUrl: 'card.component.html',     // Html file for the card component
    styleUrls:   [ 'card.component.css' ]   // Style sheet for the card component
})

export class CardComponent { }




// Core code for a components

// import { Component } from '@angular/core';
//
// @Component({
//      moduleId: module.id,
//      selector:    '',
//      templateUrl: '',
//      styleUrls:   ''
// })
//
// export class CardComponent { }