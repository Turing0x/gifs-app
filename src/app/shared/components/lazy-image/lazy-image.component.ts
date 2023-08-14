import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})

export class LazyImageComponent {

  @Input()
  public url!: string;
  
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  onLoad(): void{
    this.hasLoaded = true;
  }

}
