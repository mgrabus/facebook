import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    posts = [
        { id: 'kj1h23kj1h23', body: 'Lubię szarlotkę!' },
        { id: 'sd09f8s908df', body: 'A ja sernik!' },
    ]

    constructor() { }

    ngOnInit() {
    }

}
