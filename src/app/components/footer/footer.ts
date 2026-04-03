import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  
  certificates = [
    '/assets/certificate/certificate-1.png',
    '/assets/certificate/certificate-2.png',
    '/assets/certificate/certificate-3.png',
    '/assets/certificate/certificate-4.png'
  ];
  brandLogo = '/assets/logos/logo-zarklyx.png';

  socialIcons = [
    '/assets/logo-slider/logo-instagram-2.png',
    '/assets/logo-slider/logo-linkdin-2.png',
    '/assets/logo-slider/logo-thread-2.png',
    '/assets/logo-slider/logo-x-2.png'
  ];

  companyLinks = [
    'About ZarklyX', 'Blogs', 'Career', 'Customers', 'Pricing', 'Trust Center'
  ];

  modulesLinks = [
    'Token system', 'Social media management', 'Employee management', 'IT management', 
    'Finance & Accounting', 'HRMS', 'CRM', 'Payroll', 'Influencer'
  ];

  integrationsLinks = [
    'Facebook', 'Instagram', 'X', 'Linkedin', 'Threads', 'Pintrest', 'Tik Tok', 
    'Salesforce', 'All integrations'
  ];

  solutionsLinks = [
    'Enterprise', 'Agencies', 'Small & medium business', 'Professional services', 
    'Social media management', 'Customer care', 'Social storefronts', 'Social insights', 
    'Brand awareness', 'Industries'
  ];

  supportLinks = [
    'System status', 'FAQs', 'Tutorials', 'Cookies', 'Help center', 
    'Community', 'Expert sessions', 'Report abuse'
  ];
}