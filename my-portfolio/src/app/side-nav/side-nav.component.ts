import { Component } from '@angular/core';
import { NavLinks } from '../models/navLinks';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  navLinks: NavLinks[]=[
    {
      path:"/home",
      name:"Home"
    },
    {
      path:"/about",
      name:"About"
    },
    {
      path:"/skills",
      name:"Skills"
    },
    {
      path:"/experience",
      name:"Experience"
    },
    {
      path:"/work",
      name:"Work"
    },
  ]

}
