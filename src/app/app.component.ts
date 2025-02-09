import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header.component';
// import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { User } from './user.type';
// import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  users = DUMMY_USERS;
  currentUser!: User;
  selectedUserId?: string ;

  onSelectUser(user: User) {
    this.currentUser = user;
    this.selectedUserId = user.id;
  }

  
  
}


