import { Component } from '@angular/core';

import { faMagnifyingGlass, faHouse, faUserGroup, faBookmark, faCircleInfo, faShareNodes  } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBell, faQuestionCircle  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Network';


  faMagnifyingGlass=faMagnifyingGlass;
  faUser=faUser;
  faBell=faBell;
  faHouse=faHouse;
  faQuestionCircle=faQuestionCircle;
  faUserGroup=faUserGroup;
  faBookmark=faBookmark;
  faCircleInfo=faCircleInfo;
  faShareNodes=faShareNodes;
}
