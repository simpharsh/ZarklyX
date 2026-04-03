import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trusted-integrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trusted-integrations.html',
  styleUrls: ['./trusted-integrations.css']
})
export class TrustedIntegrationsComponent {
  
  // All your requested logo paths (note: dropbox was listed twice in your list, so it will appear twice!)
  integrationLogos = [
    '/assets/logo-slider/logo-facebook-2.png',
    '/assets/logo-slider/logo-instagram-2.png',
    '/assets/logo-slider/logo-linkdin-2.png',
    '/assets/logo-slider/logo-pintrest-2.png',
    '/assets/logo-slider/logo-youtube-2.png',
    '/assets/logo-slider/logo-googlebusiness-2.png',
    '/assets/logo-slider/logo-googledrive-2.png',
    '/assets/logo-slider/logo-x-2.png',
    '/assets/logo-slider/logo-whatsapp-2.png',
    '/assets/logo-slider/logo-dropbox-2.png', 
    '/assets/logo-slider/logo-thread-2.png'
  ];

}