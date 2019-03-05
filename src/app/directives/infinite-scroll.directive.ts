import { InfiniteScrollService } from './../services/infinite-scroll.service';
import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

    @HostListener('window:scroll') private onScroll(): void {
        const scrolled = window.scrollY + window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        if (scrolled === documentHeight) {
            this.infiniteScrollService.scrollPosition.emit('end');
        }
    }

    constructor(
        private infiniteScrollService: InfiniteScrollService
    ) { }
}
