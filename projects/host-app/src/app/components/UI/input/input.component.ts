import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputValue?: string;
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inputType?: string;

  onInputChange() {
    console.log(this.inputValue)
  }

}
