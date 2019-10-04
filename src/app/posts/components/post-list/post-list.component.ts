import { Component, OnInit, Input } from '@angular/core';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() posts: IPostList = null;

    constructor() { }

    ngOnInit() {
    }

    addPost(post) {
        console.log("ADD post",post);
        this.posts.unshift(post);
    }    

}
