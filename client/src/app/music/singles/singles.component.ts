import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftSquareFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';
import { featherUploadCloud} from '@ng-icons/feather-icons';

featherUploadCloud
@Component({
  selector: 'app-singles',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './singles.component.html',
  styleUrl: './singles.component.css',
  viewProviders: [provideIcons({bootstrapArrowLeftSquareFill, bootstrapXCircleFill, featherUploadCloud})]
})
export class SinglesComponent {

}
