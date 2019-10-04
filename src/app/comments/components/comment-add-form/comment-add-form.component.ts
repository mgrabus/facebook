import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import uuid from 'uuid';
import faker from 'faker';
import { IComment } from 'src/app/shared/interfaces/comment.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment

  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(addForm: NgForm) {
    console.log("SUBMIT", this.comment);
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toString();
    comment.author.id = uuid.v4();
    comment.author.avatarUrl = 'http://placeskull.com/50/50/e34f12';
    comment.author.name = faker.name.findName();
 
    this.addComment.emit(comment);
    // czyszczenie formularza
    addForm.reset();
  }

}
