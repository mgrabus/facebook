import { Component, OnInit, Input } from '@angular/core';

import { ICommentList } from '../../../shared/interfaces/comment-list.interface';
import { IComment } from 'src/app/shared/interfaces/comment.interface';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    @Input() comments: ICommentList = null;

    constructor() { }

    ngOnInit() {
    }

    addComment(comment) {
        console.log("ADD", comment);
        this.comments.push(comment);
    }

}
