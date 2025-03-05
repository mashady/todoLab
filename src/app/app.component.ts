import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'p_02';
}
