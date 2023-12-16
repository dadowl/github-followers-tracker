import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {SearchFormComponent} from "./search-form/search-form.component";
import {FollowersListComponent} from "./followers-list/followers-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, SearchFormComponent, FollowersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-followers-tracker';
  username = "";

  onUsernameChange(value: string) {
    this.username = value;
  }
}
