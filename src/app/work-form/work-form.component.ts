import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Work } from "../work";
@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  newQuote = new Work(0, "", "", "", 0, 0, new Date());
  @Output() addQuote = new EventEmitter<Work>();
  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Work(0, "", "", "", 0, 0, new Date());

  }
  constructor() { }

  ngOnInit() {
  }

}
