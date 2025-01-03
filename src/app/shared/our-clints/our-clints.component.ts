import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-our-clints',
  standalone: true,
  imports: [CarouselModule],
  providers: [],
  templateUrl: './our-clints.component.html',
  styleUrl: './our-clints.component.scss'
})
export class OurClintsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    navText: ['', ''],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: false
  }
}
