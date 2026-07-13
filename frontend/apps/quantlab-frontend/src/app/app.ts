import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Application shell component.
 *
 * NOTE: Per QLAB-11 requirements, this component contains no business logic
 * and only renders the `RouterOutlet` so routes render the correct pages.
 */
@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
