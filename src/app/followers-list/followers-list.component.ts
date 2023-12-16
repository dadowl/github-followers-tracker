import {Component, Input, SimpleChanges} from '@angular/core';
import {ApiService} from "../api.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FollowerComponent} from "../follower/follower.component";

@Component({
  selector: 'followers-list',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    FollowerComponent
  ],
  templateUrl: './followers-list.component.html',
  styleUrl: './followers-list.component.css'
})
export class FollowersListComponent {
  constructor(private apiService: ApiService) {}

  @Input() username: string = '';
  data: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      this.getFollowers();
    }
  }

  getFollowers(){
    if (this.username.length < 1) return;
    this.data = null;
    this.apiService.getData("http://api.github.com/users/"+this.username+"/followers").subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Ошибка при получении данных:', error);
      }
    );
  }
}
