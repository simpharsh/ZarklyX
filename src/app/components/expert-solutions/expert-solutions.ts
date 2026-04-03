import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expert-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expert-solutions.html',
  styleUrls: ['./expert-solutions.css']
})
export class ExpertSolutionsComponent implements AfterViewInit {
  
  features = [
    { text: 'Lorem ipsum management dolor', iconClass: 'fi fi-tr-shop' },
    { text: 'Sit amet consectetur elit', iconClass: 'fi fi-rr-settings' },
    { text: 'Adipiscing elit sed do eiusmod', iconClass: 'fi fi-rr-chart-pie-alt' },
    { text: 'Tempor incididunt ut labore', iconClass: 'fi fi-rr-document' }
  ];

  // Updated Stats Array to handle animations
  stats = [
    { current: 0, target: 124, suffix: '+', text: 'Lorem ispums on' },
    { current: 0, target: 22, suffix: '+', text: 'Lorem ispums on' },
    { current: 0, target: 124, suffix: '+', text: 'Lorem ispums on' }
  ];

  avatars = [
    '/assets/pfps/pfp1.png',
    '/assets/pfps/pfp2.png',
    '/assets/pfps/pfp3.png'
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // This observes the component and triggers the animation ONLY when it scrolls into view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateStats();
        observer.disconnect(); // Stops observing once the animation has run
      }
    }, { threshold: 0.5 }); // Triggers when 50% of the section is visible

    observer.observe(this.el.nativeElement);
  }

  animateStats() {
    const duration = 2000; // 2 seconds

    this.stats.forEach(stat => {
      const targetValue = stat.target;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        
        // Calculates how far along the animation is (from 0.0 to 1.0)
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // This is an "Ease Out Exponential" formula. 
        // It makes the numbers fly up quickly, then smoothly decelerate at the end.
        const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        stat.current = targetValue * easeOutProgress;

        if (progress < 1) {
          // Tells the browser to run the next frame synced with the monitor's refresh rate (60fps/120fps)
          window.requestAnimationFrame(step);
        } else {
          // Ensures it lands exactly on the final number without decimals
          stat.current = targetValue; 
        }
      };

      // Start the animation loop!
      window.requestAnimationFrame(step);
    });
  }

  // Helper function to cleanly round the numbers on the screen
  MathFloor(value: number): number {
    return Math.floor(value);
  }
}