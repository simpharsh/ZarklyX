import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule], // This fixes the *ngIf error!
  templateUrl: './cookie-consent.html', 
  styleUrls: ['./cookie-consent.css']
})
export class CookieConsent implements OnInit {
  
  // Controls if the pop-up is visible
  isVisible = signal(false);

  // Defines the links for your HTML
  links = {
    terms: '#',
    privacy: '#'
  };

  ngOnInit() {
    // Check localStorage. If the user hasn't accepted yet, show the pop-up!
    if (!localStorage.getItem('cookieConsentAccepted')) {
      setTimeout(() => this.isVisible.set(true), 500); 
    }
  }

  // Closes the pop-up without saving
  closePopUp() {
    this.isVisible.set(false);
  }

  // Saves the choice to localStorage so it never shows again, and closes it
  acceptAll() {
    localStorage.setItem('cookieConsentAccepted', 'true');
    this.closePopUp();
  }
}