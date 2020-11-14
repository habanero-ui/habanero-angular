import { Component, Input } from '@angular/core'

@Component({
  selector: 'divider',
  template: `<hr [ngClass]="classes" />`,
  styleUrls: ['./index.css'],
})
export default class DividerComponent {
  @Input()
  thickness: 'thin' | 'regular' = 'regular'

  public get classes(): string[] {
    return ['divider', `divider--thickness-${this.thickness}`]
  }
}
