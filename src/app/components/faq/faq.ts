import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  
  // Using fresh dummy data instead of the image text
  faqs = [
    {
      question: 'What is the typical onboarding timeline?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
      isOpen: true // First one is open by default
    },
    {
      question: 'Do you offer custom enterprise pricing?',
      answer: 'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Cras mattis consectetur purus sit amet fermentum.',
      isOpen: false
    },
    {
      question: 'How secure is the platform data?',
      answer: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      isOpen: false
    },
    {
      question: 'Can I integrate with third-party tools?',
      answer: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      isOpen: false
    }
  ];

  // Toggles the clicked FAQ and closes the others
  toggleFaq(index: number) {
    this.faqs.forEach((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false; 
      }
    });
  }
}