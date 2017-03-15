import { Component } from '@angular/core';

import { Task } from './model/task'
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    private tasks = [                                                                                                    // always put private in front of your component properties so nothing can modify the data out side of it
        new Task(
            "Buy a monkey",
            false
        ),
        new Task(
            "Study more TypeScript",
            false
        )
    ]
}