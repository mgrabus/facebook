import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts/services/posts.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts = null;
  error = null;

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPosts();
  }

  private async setupPosts() {
    try {
      this.posts = await this.postService.getPosts();
    } catch (error) {
      console.log(error);
      this.error = error;
    }

  }

  isDisplayLoader() {
    return !(this.posts || this.error);
  }


}
