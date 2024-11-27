import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SnowflakesComponent } from '../snowflakes/snowflakes.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SnowflakesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
