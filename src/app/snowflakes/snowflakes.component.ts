import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-snowflakes',
  imports: [],
  templateUrl: './snowflakes.component.html',
  styleUrl: './snowflakes.component.scss'
})
export class SnowflakesComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.createSnowflake();
    }
  }

  createSnowflake(): void {
    const snowflake = this.renderer.createElement('div');
    this.renderer.addClass(snowflake, 'snowflake');

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `-${Math.random()}s`;

    const container = document.querySelector('.snowflakes') as HTMLElement;
    container.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
      container.removeChild(snowflake);
      this.createSnowflake(); 
    });
  }
}