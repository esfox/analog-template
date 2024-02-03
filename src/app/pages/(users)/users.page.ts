import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { MainLayoutComponent } from '@app/layouts/main-layout/main-layout.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

const mockUsers = [
  {
    id: 1,
    email: 'john@asdf.com',
  },
  {
    id: 2,
    email: 'doe@asdf.com',
  },
  {
    id: 3,
    email: 'foo@asdf.com',
  },
  {
    id: 4,
    email: 'bar@asdf.com',
  },
  {
    id: 5,
    email: 'baz@asdf.com',
  },
];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MainLayoutComponent, HeaderComponent, TableModule, ButtonModule],
  templateUrl: './users.page.html',
})
export default class UsersPageComponent {
  users = new Array(10).fill().flatMap(() => mockUsers);
}
