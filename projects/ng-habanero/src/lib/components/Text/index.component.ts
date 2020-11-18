import { Component, Input } from '@angular/core';

@Component({
  selector: 'hb-text',
  template: `<span [ngClass]="classes">{{ text }}</span>`,
  styleUrls: ['./index.css'],
})
export class TextComponent {
  @Input()
  color:
    | 'black'
    | 'blue'
    | 'border'
    | 'error'
    | 'gold'
    | 'green'
    | 'info'
    | 'none'
    | 'offwhite'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'subtle'
    | 'success'
    | 'warning' = 'black';

  @Input()
  colorIsBackground: Boolean = false;

  @Input()
  text = 'The quick brown fox jumps over the lazy dog';

  @Input()
  variant:
    | 'body-extra-small'
    | 'body-large'
    | 'body-small'
    | 'button'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label-large'
    | 'label-small' = 'body-large';

  public get classes(): string[] {
    return [
      'text',
      this.colorIsBackground ? 'text--color-is-background' : '',
      `text--color-${this.color}`,
      `text--variant-${this.variant}`,
    ];
  }
}
