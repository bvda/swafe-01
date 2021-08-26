import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }

}