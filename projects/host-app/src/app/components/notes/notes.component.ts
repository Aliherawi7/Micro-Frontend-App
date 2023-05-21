import { Component } from '@angular/core';
import { Note } from '../../constants/Notes';
import { notes } from "../../constants/Notes"



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes?: Note[] = notes;



}
