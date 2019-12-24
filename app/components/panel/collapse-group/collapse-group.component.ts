import { Component, OnInit, AfterContentInit, Input, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import { CollapseComponent } from "../collapse/collapse.component";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'tp-collapse-group',
  templateUrl: 'app/components/panel/collapse-group/collapse-group.component.html',
  styleUrls: ['app/components/panel/collapse-group/collapse-group.component.css']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(CollapseComponent) collapses: QueryList<CollapseComponent>;
  @Input() multiple: boolean = true;

  private _subscriptions: Subscription[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.collapses.forEach(collapse => {
      let subscription = collapse.selectedChange.subscribe((coll: { selected: any; }) => {
        if (!this.multiple && coll.selected) {
          this.toggleCollapse(coll);
        }
      });
      this._subscriptions.push(subscription);
    });
  }

  toggleCollapse(collapse : any) {
    this.collapses.forEach(c => {
      if (c.collapseId != collapse.collapseId) {
        c.selected = false;
      }
    });
  }

  ngOnDestroy() {
    if (this._subscriptions && this._subscriptions.length) {
      this._subscriptions.forEach(sub => sub.unsubscribe());
    }
    this._subscriptions = [];
  }

}
