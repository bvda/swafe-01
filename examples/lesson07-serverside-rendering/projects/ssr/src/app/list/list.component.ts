import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  coins$: Observable<any>

  constructor(private networkService: NetworkService, private router: Router) { 
    this.coins$ = this.networkService.getCoins()
  }

  navigate(id: string) {
    this.router.navigate(['details', id])
  }
}
