import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-next-gen',
  standalone: true,
  imports: [],
  templateUrl: './next-gen.html',
  styleUrl: './next-gen.css' 
})
export class NextGenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') slider!: ElementRef;
  
  currentSlide = 0;
  totalSlides = 3; // The number of images you have
  autoSlideInterval: any;

  // Runs automatically after the HTML is fully loaded on the screen
  ngAfterViewInit() {
    this.startAutoSlide();
  }

  // Cleans up the timer if you navigate away from this page
  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    // Changes the slide every 3000 milliseconds (3 seconds)
    this.autoSlideInterval = setInterval(() => {
      let nextSlide = this.currentSlide + 1;
      
      // If we reach the end, loop back to the first image
      if (nextSlide >= this.totalSlides) {
        nextSlide = 0;
      }
      
      this.goToSlide(nextSlide);
    }, 3000); 
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    
    // Safety check to ensure the HTML element exists before trying to scroll it
    if (this.slider) {
      const sliderElement = this.slider.nativeElement;
      const slideWidth = sliderElement.clientWidth; 
      
      sliderElement.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  }

  onScroll(event: Event) {
    const sliderElement = event.target as HTMLElement;
    this.currentSlide = Math.round(sliderElement.scrollLeft / sliderElement.clientWidth);
  }
  
  // Optional: Pause auto-slide when a user manually clicks a dot
  onDotClick(index: number) {
    this.stopAutoSlide(); // Stop the timer
    this.goToSlide(index); // Go to the clicked slide
    this.startAutoSlide(); // Restart the timer so it doesn't immediately jump
  }
}