import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {User} from "../dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) user!: User
  user=input.required<User>()
  imagePath=computed(()=>'/assets/users/'+this.user().avatar)
  // @Output() select = new EventEmitter()
  select=output<string>()

  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
