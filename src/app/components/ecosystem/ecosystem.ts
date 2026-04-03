import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrbitItem {
  label: string;
  radius: number; // Distance from the center in pixels
  angle: number;  // Position on the circle in degrees (0 is straight up)
  color: string;
  iconClass: string;  // Path to the icon image file
}

@Component({
  selector: 'app-ecosystem', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecosystem.html', 
  styleUrls: ['./ecosystem.css'] // Updated to .css
})
export class EcosystemComponent {
  
  // Inner Layer (6 Items) - Radius: ~200px
  innerItems: OrbitItem[] = [
    { label: 'SEO', radius: 140, angle: 300, color: '#2dd4bf', iconClass: 'fi fi-sr-discover' },
    { label: 'Client Management', radius: 190, angle: 270, color: '#2dd4bf', iconClass: 'fi fi-rs-following' },
    { label: 'IT Management', radius: 170, angle: 240, color: '#2dd4bf', iconClass: 'fi fi-rs-computer' },
    { label: 'Sales & Marketing', radius: 170, angle: 65, color: '#2dd4bf', iconClass: 'fi fi-ss-store-buyer' },
    { label: 'Social Media', radius: 170, angle: 90, color: '#2dd4bf', iconClass: 'fi fi-ss-social-network' },
    { label: 'Accounting', radius: 160, angle: 120, color: '#2dd4bf', iconClass: 'fi fi-ss-bank' }
  ];

  middleItems: OrbitItem[] = [
    { label: 'Project Management', radius: 360, angle: 300, color: '#2dd4bf', iconClass: 'fi fi-sr-folder-gear' },
    { label: 'Attendance', radius: 360, angle: 280, color: '#2dd4bf', iconClass: 'fi fi-sr-calendar-clock' },
    { label: 'Todo List', radius: 360, angle: 260, color: '#2dd4bf', iconClass: 'fi fi-rr-list-check' },
    { label: 'Inventory', radius: 360, angle: 240, color: '#2dd4bf', iconClass: 'fi fi-ss-dolly-flatbed-alt' },
    { label: 'Bills & Utility', radius: 360, angle: 60, color: '#2dd4bf', iconClass: 'fi fi-ss-credit-card-check' },
    { label: 'Payroll', radius: 360, angle: 82, color: '#2dd4bf', iconClass: 'fi fi-sr-money-transfer-coin-arrow' },
    { label: 'HRMS', radius: 360, angle: 100, color: '#2dd4bf', iconClass: 'fi fi-sr-user-crown' },
    { label: 'Employee Management', radius: 360, angle: 120, color: '#2dd4bf', iconClass: 'fi fi-sr-users' }
  ];

  outerItems: OrbitItem[] = [
    { label: 'Influencers', radius: 470, angle: 285, color: '#2dd4bf', iconClass: 'fi fi-ss-shield-trust' },
    { label: 'Reports & Analytics', radius: 470, angle: 255, color: '#2dd4bf', iconClass: 'fi fi-sr-chart-simple' }, 
    { label: 'Token & Queue', radius: 470, angle: 75, color: '#2dd4bf', iconClass: 'fi fi-rr-ticket' }, 
    { label: 'Cloud Storage', radius: 470, angle: 105, color: '#2dd4bf', iconClass: 'fi fi-sr-cloud' } 
  ];

  // Combine them all for the template loop
  get allOrbitItems(): OrbitItem[] {
    return [...this.innerItems, ...this.middleItems, ...this.outerItems];
  }

  profileTopPos = { top: '10%', left: '50%' };
  profileBottomRightPos = { bottom: '15%', right: '15%' };
  googleLogoPos = { top: '20%', right: '20%' };
  youtubeLogoPos = { top: '30%', left: '30%' };
  instagramLogoPos = { top: '55%', left: '10%' };
  facebookLogoPos = { bottom: '25%', left: '55%' };
  
  // These are the missing variables causing the errors!
  agencyCardPos = { top: '10%', left: '10%' };
  growthCardPos = { bottom: '10%', left: '35%' };

}