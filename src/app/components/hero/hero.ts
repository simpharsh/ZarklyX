import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {

  current = 0;

  slides = [
    {
      image: 'assets/hero-slider/hero-slider1.png',
      title: "It's not about ideas. It's about making ideas happen.",
      desc: "Streamline your workflow with ZarklyX.",
      badges: [
        { title: "2x Faster", desc: "Boost productivity", class: "b1" },
        { title: "Presentation", desc: "Team update", class: "b2" }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider2.png',
      title: "Build faster. Grow smarter.",
      desc: "Unlock your team's full potential.",
      badges: [
        { title: "5x Growth", desc: "Performance stats", class: "b3" }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider3.png',
      title: "From concept to creation.",
      desc: "Transform ideas into reality with ZarklyX.",
      badges: [
        { title: "3x Efficiency", desc: "Project management", class: "b4" },
        { title: "Collaboration", desc: "Team synergy", class: "b5" }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider4.png',
      title: "Innovate with confidence.",
      desc: "Drive your business forward with ZarklyX.",
      badges: [
        { title: "10x ROI", desc: "Return on investment", class: "b6" }
      ]
    }
  ];

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }
}