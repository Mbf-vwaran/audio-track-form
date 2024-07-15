import { Component } from '@angular/core';
import { bootstrapCheckCircleFill } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
  viewProviders: [provideIcons({bootstrapCheckCircleFill})]
})
export class SuccessComponent {

}
