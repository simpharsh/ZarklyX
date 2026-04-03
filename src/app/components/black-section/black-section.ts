import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-black-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './black-section.html',
  styleUrls: ['./black-section.css']
})
export class BlackSectionComponent {
  mouseX = 0;
  mouseY = 0;

  tabs = [
    {
      name: 'Accounting',
      dashboardImg: '/assets/screenshots/screenshot-1.png' // Just one image now!
    },
    {
      name: 'Attendance & Payroll',
      dashboardImg: '/assets/screenshots/screenshot-1.png'
    },
    {
      name: 'Lorem Ipsum',
      dashboardImg: '/assets/screenshots/screenshot-1.png'
    }
  ];

  activeTab = this.tabs[1]; 

  // Updated to track the mouse exactly within the new top container
  updateSpotlight(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }
}