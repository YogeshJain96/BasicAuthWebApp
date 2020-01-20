import { Component, OnInit } from "@angular/core";
import { ListService } from "../list.service";

@Component({
  selector: "app-common-list",
  templateUrl: "./common-list.component.html",
  styleUrls: ["./common-list.component.css"]
})
export class CommonListComponent implements OnInit {
  commonList = [];

  constructor(public _listService: ListService) {}

  ngOnInit() {
    this._listService.getCommonList().subscribe(
      res => (this.commonList = res),
      err => console.log(err)
    );
  }
}
