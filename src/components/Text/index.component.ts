import { Component, Input } from '@angular/core'

@Component({
  selector: 'text',
  template: `<span [ngClass]="classes">{{ text }}</span>`,
  styleUrls: ['./index.css'],
})
export default class TextComponent {
  @Input()
  color: 'thin' | 'regular' = 'regular'

  @Input()
  colorIsBackground: Boolean = false

  @Input()
  text = 'The quick brown fox jumps over the lazy dog'

  @Input()
  variant: 'thin' | 'regular' = 'regular'

  public get classes(): string[] {
    return [
      'text',
      this.colorIsBackground ? 'text--color-is-background' : '',
      `text--color-${this.color}`,
      `text--variant-${this.variant}`,
    ]
  }
}
