import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navbarNav', { static: true }) navbarNav!: ElementRef;
  toggleMenu() { this.navbarNav.nativeElement.classList.toggle('show'); }

}
