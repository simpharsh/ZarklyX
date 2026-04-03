import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.css',
})
export class CookieConsent {
  private readonly visible = signal(true);

  readonly links = {
    terms: '#',
  };

  isVisible(): boolean {
    return this.visible();
  }

  closePopUp(): void {
    this.visible.set(false);
  }

  acceptAll(): void {
    this.visible.set(false);
  }
}
