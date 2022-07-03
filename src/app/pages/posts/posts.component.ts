import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Post } from 'src/app/services/models/posts';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> = this.getPostsByUser(1)

  constructor( private userService: UsersService, private postService: PostsService) {}

  ngOnInit(): void {
  }

  getPostsByUser(userId: number) {
    return this.userService.getUsers()
    .pipe(
      switchMap(s => {
        return  this.postService.getPosts()
      }),
      map((s: Post[]) => {
        const posts = s.filter(f => f.userId === userId)
        console.log(posts)
        return posts
      })
    )
  }

}
