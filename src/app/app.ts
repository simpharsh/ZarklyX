import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { HeroComponent } from "./components/hero/hero";
import { EcosystemComponent } from './components/ecosystem/ecosystem';
import { NextGenComponent } from "./components/next-gen/next-gen";
import { BlackSectionComponent } from "./components/black-section/black-section";
import { SlidersComponent } from './components/sliders/sliders';  
import { ExpertSolutionsComponent } from './components/expert-solutions/expert-solutions';
import { TrustedIntegrationsComponent } from "./components/trusted-integrations/trusted-integrations";
import { FaqComponent } from "./components/faq/faq";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, HeroComponent, EcosystemComponent, NextGenComponent, BlackSectionComponent, SlidersComponent, ExpertSolutionsComponent, TrustedIntegrationsComponent, FaqComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ZarklyX');
}
