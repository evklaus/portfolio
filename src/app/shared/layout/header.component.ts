import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {

  public navItemsEng = [
    { name: 'Stack', href: 'nav-skills'},
    { name: 'About', href: 'nav-about' },
    { name: 'Education', href: 'nav-education' },
    { name: 'Experience', href: 'nav-experience' },
    { name: 'Contacts', href: 'nav-contacts' },
  ];

  public ngAfterViewInit() {
    // it's a temporary solution
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('header__nav_active');
        });
      }
    }

    // also
    const smoothScroll = (targetEl, duration) => {
      const headerElHeight = document.querySelector('.header').clientHeight;
      const target = document.querySelector(targetEl);
      const targetPosition = target.getBoundingClientRect().top - headerElHeight;
      const startPosition = window.pageYOffset;
      let startTime = null;

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) {
          return (c / 2) * t * t + b;
        }
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };


      const animation = (currentTime) => {
        if (startTime === null) {
          startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    };

    const scrollToAnchor = () => {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
        each.addEventListener('click', function() {
          const currentTarget = this.getAttribute('href');
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollToAnchor();
  }
}
