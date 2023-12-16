import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'search-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {
  @Output() inputValueChange = new EventEmitter<string>();
  inputValue: string = '';

  submitForm() {
    if (this.inputValue.length < 2) return;
    console.log('Отправлено: ', this.inputValue);
    this.inputValueChange.emit(this.inputValue);
  }
}
