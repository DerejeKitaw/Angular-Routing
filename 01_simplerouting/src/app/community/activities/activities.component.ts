import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../core/nav/nav.component';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  menuItemsInputs: MenuItem[] = [
      { caption: 'Community', link: ['/community'] },
      { caption: 'Housing', link: ['/housing'] },
      { caption: 'Personal', link: ['/personal'] },
      { caption: 'ForSale', link: ['/forSale'] },
      { caption: 'Jobs', link: ['/jobs'] },
      { caption: 'Services', link: ['/services'] },
      { caption: 'Resumes', link: ['/resumes'] },
    ];
  constructor() { }

  ngOnInit() {
  }

}
