import { Component, OnInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stateMenu: boolean = false;
  nevBlock = null;

  constructor() { 
    this.nevBlock = document.getElementsByClassName('nav');
  }

  ngOnInit() {
  }

  showMenu() {
    this.stateMenu = !this.stateMenu;

    if (this.stateMenu) {
      disableBodyScroll(this.nevBlock);
    } else {
      enableBodyScroll(this.nevBlock);
    }
    console.log('nevBlock', disableBodyScroll(this.nevBlock));
  }
}
