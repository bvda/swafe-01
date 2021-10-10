import { Component, OnInit } from '@angular/core';
import { Coin } from '../network.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  coin: Coin = history.state.data.coin
}
