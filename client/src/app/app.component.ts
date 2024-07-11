import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftSquareFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders: [provideIcons({bootstrapArrowLeftSquareFill, bootstrapXCircleFill})]
})
export class AppComponent {
  title = 'client';
}
