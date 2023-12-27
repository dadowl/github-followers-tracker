import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {FollowersService} from "../followers.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FollowerComponent} from "../follower/follower.component";
import {GithubUser} from "../github-user";
import {Subscription} from "rxjs";

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
export class FollowersListComponent implements OnChanges, OnDestroy{
  constructor(private apiService: FollowersService) {}

  @Input() username: string = '';
  isLoad: boolean = false;
  users: Array<GithubUser> | null = null;
  subscription = new Subscription();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      this.getFollowers();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getFollowers(){
    if (this.username.length < 1) return;
    this.users = [];
    this.isLoad = true;
    this.subscription.add(
      this.apiService.getData("https://api.github.com/users/"+this.username+"/followers").subscribe(
        (response) => {
          this.isLoad = false;
          this.users = response;
        }
      )
    );
  }
}
