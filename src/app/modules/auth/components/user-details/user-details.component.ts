import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from "@app/modules/auth/contracts";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input() user: User;
  @Output() doLogout = new EventEmitter<void>();

  public logout(): void {
    this.doLogout.emit();
  }
}
