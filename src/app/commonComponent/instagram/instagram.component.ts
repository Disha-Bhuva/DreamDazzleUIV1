// import { CommonModule } from '@angular/common';
// import { Component, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// @Component({
//   selector: 'app-instagram',
//   standalone: true,
//   imports: [SlickCarouselModule, FormsModule, CommonModule],
//   templateUrl: './instagram.component.html',
//   styleUrls: ['./instagram.component.css'],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class InstagramComponent {
//   @Input() className: string = '';

//   slides = [
//     { img: 'assets/images/img1.png' },
//     { img: 'assets/images/img2.png' },
//     { img: 'assets/images/img3.png' },
//     { img: 'assets/images/img4.png' },
//     { img: 'assets/images/img5.png' },
//     { img: 'assets/images/img6.png' },
//     { img: 'assets/images/img1.png' },
//     { img: 'assets/images/img2.png' },
//     { img: 'assets/images/img3.png' },
//   ];
//   slideConfig = {
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   slickInit(e: any) {
//     console.log('slick initialized');
//   }

//   breakpoint(e: any) {
//     console.log('breakpoint', e);
//   }

//   afterChange(e: any) {
//     console.log('afterChange');
//   }

//   beforeChange(e: any) {
//     console.log('beforeChange');
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [SlickCarouselModule, FormsModule, CommonModule],
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstagramComponent {
  @Input() className: string = '';

  slides = [
    { img: 'assets/images/img1.png' },
    { img: 'assets/images/img2.png' },
    { img: 'assets/images/img3.png' },
    { img: 'assets/images/img4.png' },
    { img: 'assets/images/img5.png' },
    { img: 'assets/images/img6.png' },
    { img: 'assets/images/img1.png' },
    { img: 'assets/images/img2.png' },
    { img: 'assets/images/img3.png' },
  ];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint', e);
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
