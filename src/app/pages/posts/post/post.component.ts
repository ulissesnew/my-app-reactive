import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/services/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id!: number;
  post$!: Observable<Post>;

  constructor(private postsService: PostsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.post$ = this.getPost(this.id)
  }

  getPost(id: number): Observable<Post> {
    return  this.postsService.getPostId(id);
  }

}
