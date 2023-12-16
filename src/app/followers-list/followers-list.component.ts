import {Component, Input, SimpleChanges} from '@angular/core';
import {ApiService} from "../api.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FollowerComponent} from "../follower/follower.component";
import {GithubUser} from "../github-user";

@Component({
  selector: 'followers-list',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    FollowerComponent,
    NgIf
  ],
  templateUrl: './followers-list.component.html',
  styleUrl: './followers-list.component.css'
})
export class FollowersListComponent {
  constructor(private apiService: ApiService<Array<GithubUser>>) {}

  @Input() username: string = '';
  failed: boolean = false;
  users: Array<GithubUser> = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      this.getFollowers();
    }
  }

  getFollowers(){
    if (this.username.length < 1) return;
    this.users = [];
    this.failed = false;
    this.apiService.getData("http://api.github.com/users/"+this.username+"/followers").subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Ошибка при получении данных:', error);
        this.failed = true;
      }
    );
  }
}
