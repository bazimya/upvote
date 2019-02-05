import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Work } from "../work";
@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  @Input() worker1: Work;
  @Output() isComplete = new EventEmitter<boolean>();
  deletingwork(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}



