import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sliders.html',
  styleUrls: ['./sliders.css']
})
export class SlidersComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reviewsSlider') reviewsSlider!: ElementRef;
  currentSlide = 0;
  totalPages = 3;
  autoSlideInterval: any;

  brandLogos = [
    '/assets/brand-slider/slider1.png',
    '/assets/brand-slider/slider2.png',
    '/assets/brand-slider/slider3.png',
    '/assets/brand-slider/slider4.png',
    '/assets/brand-slider/slider5.png',
    '/assets/brand-slider/slider6.png',
    '/assets/brand-slider/slider7.png'
  ];

  reviews = [
    {
      text: '“ZarklyX completely transformed how our team manages projects and collaboration. Everything we need is now in one place, and productivity has improved significantly.”',
      name: 'Ethena Milla',
      company: 'Keryar IT Solutions',
      pfp: '/assets/pfps/pfp1.png'
    },
    {
      text: '“The intuitive UI and seamless onboarding process meant our entire department was up and running in days, not weeks. It is incredibly user-friendly.”',
      name: 'James Carter',
      company: 'Nexus Dynamics',
      pfp: '/assets/pfps/pfp2.png'
    },
    {
      text: '“PULSE AI has been a game-changer for our marketing strategy. The automated insights save us hours of manual data analysis every single week.”',
      name: 'Sophia Patel',
      company: 'Nova Creative',
      pfp: '/assets/pfps/pfp3.png'
    },
    {
      text: '“We scaled our operations 3x this year, and ZarklyX handled the growth flawlessly. The infrastructure is robust and highly dependable.”',
      name: 'Liam Chen',
      company: 'Apex Logistics',
      pfp: '/assets/pfps/pfp4.png'
    },
    {
      text: '“The attendance and payroll modules are seamlessly integrated. What used to take our HR team days is now completed in a matter of clicks.”',
      name: 'Olivia Martinez',
      company: 'Stellar Innovations',
      pfp: '/assets/pfps/pfp5.png'
    },
    {
      text: '“Customer support is outstanding. Any minor hiccups we ran into were resolved almost immediately by their dedicated success team.”',
      name: 'Noah Williams',
      company: 'FinTech Edge',
      pfp: '/assets/pfps/pfp6.png'
    },
    {
      text: '“We replaced four different software tools with just ZarklyX. It has drastically reduced our overhead costs while improving cross-team visibility.”',
      name: 'Ava Thompson',
      company: 'EcoBuild Corp',
      pfp: '/assets/pfps/pfp7.png'
    },
    {
      text: '“The real-time dashboard customization is fantastic. Every manager can see exactly the metrics that matter most to their specific department.”',
      name: 'William Davis',
      company: 'Global Retailers',
      pfp: '/assets/pfps/pfp8.png'
    },
    {
      text: '“Highly recommend ZarklyX to any agency looking to streamline client management. It is fast, reliable, and constantly adding great new features.”',
      name: 'Mia Johnson',
      company: 'BlueWave Agency',
      pfp: '/assets/pfps/pfp9.png'
    }
  ];

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    // Changes slide every 4 seconds (4000ms)
    this.autoSlideInterval = setInterval(() => {
      let nextSlide = this.currentSlide + 1;
      if (nextSlide >= this.totalPages) {
        nextSlide = 0; // Loop back to start
      }
      this.goToSlide(nextSlide);
    }, 4000); 
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  goToSlide(pageIndex: number) {
    this.currentSlide = pageIndex;
    
    if (this.reviewsSlider) {
      const sliderElement = this.reviewsSlider.nativeElement;
      // Get all the cards inside the slider
      const cards = sliderElement.querySelectorAll('.review-card');
      // Figure out which card is the first one on the target page (Card 0, 3, or 6)
      const targetCardIndex = pageIndex * 3; 

      if (cards[targetCardIndex]) {
        const targetCard = cards[targetCardIndex] as HTMLElement;
        
        // Scroll exactly to the left edge of that specific card!
        sliderElement.scrollTo({
          left: targetCard.offsetLeft - sliderElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }
  // Pauses the timer if the user clicks a dot manually, so it doesn't jump instantly
  onDotClick(pageIndex: number) {
    this.stopAutoSlide();
    this.goToSlide(pageIndex);
    this.startAutoSlide();
  }

  onScroll(event: Event) {
    const sliderElement = event.target as HTMLElement;
    this.currentSlide = Math.round(sliderElement.scrollLeft / sliderElement.clientWidth);
  }
}