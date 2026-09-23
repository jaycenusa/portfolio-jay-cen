import { Component } from '@angular/core';
import { contactLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly links = contactLinks;
}
