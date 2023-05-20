import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() color?: string;
  @Input() title?: string;
  @Input() date?: string;
  @Input() text?: string;



}
