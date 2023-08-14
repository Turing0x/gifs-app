import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  @Input()
  public gif!: Gifs;
}
