import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Define the blueprint for a Badge (notice the '?' making hasGraph optional)
interface Badge {
  title: string;
  desc: string;
  class: string;
  hasGraph?: boolean; 
}

// 2. Define the blueprint for a Slide
interface Slide {
  image: string;
  title: string;
  desc: string;
  badges: Badge[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  current = 0;
  autoSlideInterval: any;

  // 3. Apply the Slide[] blueprint to your array!
  slides: Slide[] = [
    {
      image: 'assets/hero-slider/hero-slider1.png',
      title: "Lorem It's not about ideas. It's about making ideas happen.",
      desc: "Streamline your entire digital workflow with FosterX. From strategy to execution, unlock the full potential of social media to elevate your marketing.",
      badges: [
        { title: "2x Faster", desc: "Streamline your entire digital ZarklyX. From strategy.", class: "b1" },
        { title: "Lorem Presentation", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", class: "b2" }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider2.png',
      title: "Build faster. Grow smarter.",
      desc: "Unlock your team's full potential and streamline your daily tasks with our advanced toolset.",
      badges: [
        { title: "5x Growth", desc: "Streamline your entire digital ZarklyX. From strategy.", class: "b3", hasGraph: true }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider3.png',
      title: "From concept to creation.",
      desc: "Transform ideas into reality with ZarklyX platform management.",
      badges: [
        { title: "3x Efficiency", desc: "Project management timeline.", class: "b4" },
        { title: "Collaboration", desc: "Team synergy activated.", class: "b5" }
      ]
    },
    {
      image: 'assets/hero-slider/hero-slider4.png',
      title: "Innovate with confidence.",
      desc: "Drive your business forward with ZarklyX enterprise solutions.",
      badges: [
        { title: "10x ROI", desc: "Return on investment tracked.", class: "b6" }
      ]
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }
}