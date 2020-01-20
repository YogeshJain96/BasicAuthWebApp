import { Component, OnInit } from "@angular/core";
import { ListService } from "../list.service";

@Component({
  selector: "app-special-list",
  templateUrl: "./special-list.component.html",
  styleUrls: ["./special-list.component.css"]
})
export class SpecialListComponent implements OnInit {
  specialList = [];

  constructor(public _listService: ListService) {}

  ngOnInit() {
    this._listService.getCommonList().subscribe(
      res => (this.specialList = res),
      err => console.log(err)
    );
  }
}
