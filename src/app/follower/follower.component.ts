import {Component, Input} from '@angular/core';

@Component({
  selector: 'follower',
  standalone: true,
  imports: [],
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.css'
})
export class FollowerComponent {
  @Input() user: any
}
