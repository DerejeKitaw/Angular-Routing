import { Component, OnInit, Input } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'mynav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() menuItemsInputs: MenuItem[];

  menu:MenuItem[];
  constructor() { }

  

  ngOnInit() {
    this.menu = this.menuItemsInputs;
    // this.menuItems = [
    //   { caption: 'Community', link: ['/community'] },
    //   { caption: 'Housing', link: ['/housing'] },
    //   { caption: 'Personal', link: ['/personal'] },
    //   { caption: 'ForSale', link: ['/forSale'] },
    //   { caption: 'Jobs', link: ['/jobs'] },
    //   { caption: 'Services', link: ['/services'] },
    //   { caption: 'Resumes', link: ['/resumes'] },
    // ];
  }

}
