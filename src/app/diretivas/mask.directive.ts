import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appMask]',
})
export class MaskDirective {
    @Input('appMask') mask: string;

    constructor(private element: ElementRef) {}

    @HostListener('input', ['$event']) onInputChange(event): void {
        if (event.inputType === 'deleteContentBackward') {
            return;
        }

        const initalValue = this.element.nativeElement.value;
        initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.element.nativeElement.value) {
            event.stopPropagation();
        }

        this.element.nativeElement.value = this.format(this.mask, initalValue);
    }

    format(mask: string, value: any): string {
        let text = '';
        const data = value;
        let c: string;
        let m: string;
        let i: any;
        let x: number;

        for (i = 0, x = 1; x && i < mask.length; ++i) {
            c = data.charAt(i);
            m = mask.charAt(i);

            switch (mask.charAt(i)) {
                case '#':
                    if (/\d/.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'A':
                    if (/[a-z]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;

                    }
                    break;

                case 'N':
                    if (/[a-z0-9]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'X':
                    text += c;
                    break;

                default:
                    text += m;
                    break;
            }
        }
        return text;
    }
}
