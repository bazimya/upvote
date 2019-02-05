import { Component, OnInit } from "@angular/core";
import { Work } from "../work";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workers = [
    new Work(
      1,
      "you dream is what you do not what you want",
      "bazimya",
      "saphani",
      0,
      0,
      new Date(2019, 1, 26)
    ),
    
  ];
  deletework(index) {
    this.workers[index].showAuthor = !this.workers[index].showAuthor;
    this.workers[index].showFan = !this.workers[index].showFan;
  }
  upvote(index) {
    this.workers[index].upvotes++;
  }
  downvote(index) {
    this.workers[index].downvotes++;
  }
  deletworkall(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `click ok if you want to delete ${this.workers[index].name}`
      );

      if (toDelete) {
        this.workers.splice(index, 1);
      }
    }
  }
  addNewwork(quote) {
    this.workers.push(quote);
  }
  constructor() {}

  ngOnInit() {}
}
