import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HeroSectionComponent } from "./features/hero-section/hero-section.component";
import { OurClintsComponent } from "./shared/our-clints/our-clints.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, OurClintsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OG Bees';
}
