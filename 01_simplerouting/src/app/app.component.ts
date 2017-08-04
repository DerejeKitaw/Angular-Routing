import { Component } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuItemsInputs: MenuItem[] = [
      { caption: 'Community', link: ['/community'] },
      { caption: 'Housing', link: ['/housing'] },
      { caption: 'Personal', link: ['/personal'] },
      { caption: 'ForSale', link: ['/forSale'] },
      { caption: 'Jobs', link: ['/jobs'] },
      { caption: 'Services', link: ['/services'] },
      { caption: 'Resumes', link: ['/resumes'] },
    ];
}
