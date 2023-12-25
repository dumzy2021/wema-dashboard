import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMenu, DashboardMenu } from 'src/app/core/constants/menu.model';

const collapseMotion: AnimationTriggerMetadata = trigger('collapseMotion', [
  state('expanded', style({ height: '*' })),
  state('collapsed', style({ height: 0, overflow: 'hidden' })), // Modify this line
  transition('expanded => collapsed', animate('150ms ease-in-out')),
  transition('collapsed => expanded', animate('150ms ease-in-out')),
]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isCollapsed: boolean = false;
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false,
  };

  menuList: IMenu[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    [...DashboardMenu].forEach((menu, index) => {
      if (menu.hasSub) {
        this.openMap[`sub${index}`] = false;

        menu.subs?.forEach((sub) => {
          if (window.location.href.includes(sub.link)) {
            this.openMap[`sub${index}`] = true;
          }
        });
      }
    });
    this.menuList = [...DashboardMenu];
  }
  openHandler(value: string): void {
    console.log('Open handle');
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      } else {
        this.openMap[key] = true;
      }
    }
  }
}
