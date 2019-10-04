import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPost } from 'src/app/shared/interfaces/post.interface';

import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ])
  });

  get body() {
    return this.addPostForm.get('body');
  }

  post = {
    id: null,
    createdTime:null,
    author:     {
      id: null,
      name: null,
      avatarUrl: null,
    },
    body: null,
    images: [],
    comments: null
  } as IPost;

  @Output() addPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const post = Object.assign({}, this.post);
    post.id = uuid.v4();
    post.createdTime = new Date().toString();
    post.body = this.addPostForm.getRawValue().body;
    post.author.id = uuid.v4();
    post.author.name = faker.fake('{{name.firstName}} {{name.lastName}}');
    post.author.avatarUrl = 'http://placeskull.com/50/50/126f36';
    post.images.push('http://placeskull.com/50/50/123f06/12');
    console.log(post);
    this.addPost.emit(post);
    // czyszczenie formularza
    this.addPostForm.reset();
  
  }
  
  
}
