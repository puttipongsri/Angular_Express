import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SnowflakesComponent } from '../snowflakes/snowflakes.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, SnowflakesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
