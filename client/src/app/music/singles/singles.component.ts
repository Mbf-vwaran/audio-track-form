import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftSquareFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';
import { featherUploadCloud} from '@ng-icons/feather-icons';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SingleApiService } from '../../service/single-api.service';

featherUploadCloud
@Component({
  selector: 'app-singles',
  standalone: true,
  imports: [NgIconComponent,  ReactiveFormsModule,  RouterModule],
  templateUrl: './singles.component.html',
  styleUrl: './singles.component.css',
  viewProviders: [provideIcons({bootstrapArrowLeftSquareFill, bootstrapXCircleFill, featherUploadCloud})]
})
export class SinglesComponent {
  router  =  inject(Router);

   singlesForm = new FormGroup({
    track_name  : new FormControl('', [Validators.required]),  
    track_series : new FormControl('', [Validators.required]), 
    track_subtle : new FormControl('', [Validators.required]),
    track_soundTrack: new FormControl('', [Validators.required]),
    track_artist: new FormControl('', [Validators.required]),
    track_primaryArtist1: new FormControl('', [Validators.required]),
    track_spotify_uri: new FormControl('', [Validators.required]),
    track_apple_uri: new FormControl('', [Validators.required]),
    track_sound_cloud_url: new FormControl('', [Validators.required]),
    track_contributor_name1: new FormControl('', [Validators.required]),
    track_contributor_role1: new FormControl('', [Validators.required]),
    track_genre: new FormControl('', [Validators.required]),
    track_alt_genre: new FormControl('', [Validators.required]),
    track_sub_genre: new FormControl('', [Validators.required]),
    track_alt_genre2: new FormControl('', [Validators.required]),
    track_record_year: new FormControl('', [Validators.required]),
    track_org_date: new FormControl('', [Validators.required]),
    track_comm_date: new FormControl('', [Validators.required]),
    track_comm_time: new FormControl('', [Validators.required]),
    track_pre_date: new FormControl('', [Validators.required]),
    track_lang_1: new FormControl('', [Validators.required]),
    track_year_when: new FormControl('', [Validators.required]),
    track_copyright_year: new FormControl('', [Validators.required]),
    track_copyright_iconMusic: new FormControl('', [Validators.required]),
    track_copyright_3: new FormControl('', [Validators.required]),
    track_copyright_dist: new FormControl('', [Validators.required]),
    track_isrc: new FormControl('', [Validators.required]),
    song_file1: new FormControl('', [Validators.required]),
    track_upc: new FormControl('', [Validators.required]),
    track_catalogue: new FormControl('', [Validators.required]),
    song_file: new FormControl('', [Validators.required]),
      
   })
  SingleApiService: any;

   onSubmit() {
    if (this.singlesForm.valid) {
      console.log(this.singlesForm.value);
      this.SingleApiService.singlesForm(this.singlesForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            // this.router.navigate(['/']);
            alert("singles from data send successfully")
          },
          error: (err: any) => console.log(err)
        });
    } else {
      this.singlesForm.markAllAsTouched();
    }
  }

}
